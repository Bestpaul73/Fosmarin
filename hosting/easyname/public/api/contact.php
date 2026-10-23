<?php

declare(strict_types=1);

// Публичная точка входа. Она принимает HTTP-запрос и возвращает JSON.
// Подробные ошибки PHP остаются в журнале сервера, а не попадают посетителю.
ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex, nofollow');
header('X-Content-Type-Options: nosniff');

// Схема размещения:
// <webspace>/html/fosmarin-project/api/contact.php — этот файл;
// <webspace>/private/fosmarin/ — код, PHPMailer и конфигурация.
// Три уровня от каталога api дают корень webspace, а не публичную папку html.
$privateDirectory = dirname(__DIR__, 3) . '/private/fosmarin';
$core = $privateDirectory . '/src/contact.php';

if (!is_file($core) || !is_readable($core)) {
    http_response_code(503);
    echo json_encode(['ok' => false, 'code' => 'MAIL_NOT_CONFIGURED']);
    exit;
}

require_once $core;

// Ограничиваем чтение тела запроса: не загружаем произвольный объём в память.
$rawBody = file_get_contents('php://input', false, null, 0, \Fosmarin\Contact\MAX_BODY_BYTES + 1);
$result = \Fosmarin\Contact\handleRequest(
    $_SERVER['REQUEST_METHOD'] ?? '',
    $_SERVER['CONTENT_TYPE'] ?? '',
    $rawBody === false ? '' : $rawBody,
    static function () use ($privateDirectory): ?array {
        $config = \Fosmarin\Contact\readConfig($privateDirectory);
        if ($config === null || !is_file($privateDirectory . '/vendor/autoload.php')) {
            return null;
        }
        return $config;
    },
    static function (array $config, array $data) use ($privateDirectory): void {
        \Fosmarin\Contact\sendMail($privateDirectory, $config, $data);
    }
);

if ($result['status'] === 405) {
    header('Allow: POST');
}
http_response_code($result['status']);
echo json_encode($result['body'], JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
