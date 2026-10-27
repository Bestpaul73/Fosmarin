<?php

declare(strict_types=1);

namespace Fosmarin\Contact;

use PHPMailer\PHPMailer\PHPMailer;
use RuntimeException;
use Throwable;

// Лимиты совпадают с api/contact.js, чтобы обе версии формы вели себя одинаково.
const MAX_LENGTHS = [
    'name' => 120,
    'email' => 254,
    'organisation' => 200,
    'subject' => 200,
    'message' => 5000,
];
const MAX_BODY_BYTES = 65536;

function cleanText(mixed $value): string
{
    // JSON может содержать массив вместо строки. Не превращаем его в текст.
    if (!is_string($value)) {
        return '';
    }
    // Учитываем Unicode-пробелы: на сайте семь языков.
    return preg_replace('/^[\s\x{FEFF}]+|[\s\x{FEFF}]+$/u', '', $value) ?? '';
}

function validEmail(string $value): bool
{
    // Адрес посетителя остаётся в теле письма. Он не управляет его заголовками.
    return preg_match('/^[^\s@]+@[^\s@]+\.[^\s@]+$/u', $value) === 1;
}

function jsLength(string $value): int
{
    // JavaScript считает длину в UTF-16: emoji обычно занимает две единицы.
    // Обычный strlen() в PHP считает БАЙТЫ и неправильно ограничивал бы кириллицу.
    // Считаем Unicode-символы и отдельно учитываем символы вне основной плоскости.
    preg_match_all('/./us', $value, $characters);
    $length = 0;
    foreach ($characters[0] as $character) {
        $length += strlen($character) === 4 ? 2 : 1;
    }
    return $length;
}

function result(int $status, string|null $code = null): array
{
    return [
        'status' => $status,
        'body' => $code === null ? ['ok' => true] : ['ok' => false, 'code' => $code],
    ];
}

function readConfig(string $privateDirectory): array|null
{
    $path = $privateDirectory . '/contact-config.php';
    if (!is_file($path) || !is_readable($path)) {
        return null;
    }
    $config = require $path;
    if (!is_array($config)) {
        return null;
    }
    foreach (['host', 'user', 'from', 'to'] as $field) {
        $config[$field] = cleanText($config[$field] ?? null);
    }
    // Пароль НЕ обрезаем: пробел может быть частью настоящего пароля.
    $port = filter_var($config['port'] ?? null, FILTER_VALIDATE_INT);
    if (
        !$config['host'] || preg_match('/[\s\/\x00-\x1F\x7F]/', $config['host']) ||
        !$config['user'] || !is_string($config['pass'] ?? null) || $config['pass'] === '' ||
        $port === false || $port < 1 || $port > 65535 ||
        filter_var($config['from'], FILTER_VALIDATE_EMAIL) === false ||
        filter_var($config['to'], FILTER_VALIDATE_EMAIL) === false
    ) {
        return null;
    }
    $config['port'] = $port;
    return $config;
}

function buildMailer(array $config, array $data): PHPMailer
{
    $mail = new PHPMailer(true); // true включает исключения при ошибках.
    $mail->isSMTP(); // Явно используем SMTP, а не PHP mail().
    $mail->Host = $config['host'];
    $mail->Port = $config['port'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['user'];
    $mail->Password = $config['pass'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    // Проверку сертификата TLS не отключаем. Debug не выводит SMTP-диалог в браузер.
    $mail->SMTPDebug = 0;
    $mail->Timeout = 20;
    $mail->getSMTPInstance()->Timelimit = 30;
    $mail->CharSet = PHPMailer::CHARSET_UTF8;
    $mail->Encoding = PHPMailer::ENCODING_QUOTED_PRINTABLE;
    $mail->isHTML(false); // Письмо — обычный текст, HTML посетителя не исполняется.
    $mail->setFrom($config['from'], 'FOSMARIN website');
    $mail->addAddress($config['to']);
    // НЕ добавляем Reply-To: easyname подтвердил, что он вызывал попадание в спам.
    // Получатель фиксирован в конфигурации. Посетитель не может отправлять кому угодно.
    $mail->Subject = 'FOSMARIN contact form: ' . $data['subject'];
    $mail->Body = implode("\n", [
        'New message from the FOSMARIN contact form',
        '',
        'Name: ' . $data['name'],
        'Email: ' . $data['email'],
        'Organisation: ' . ($data['organisation'] ?: 'Not specified'),
        'Subject: ' . $data['subject'],
        '',
        'Message:',
        $data['message'],
    ]);
    return $mail;
}

function sendMail(string $privateDirectory, array $config, array $data): void
{
    // Composer создаёт этот файл после установки PHPMailer.
    require_once $privateDirectory . '/vendor/autoload.php';
    if (!buildMailer($config, $data)->send()) {
        throw new RuntimeException('SMTP_SEND_FAILED');
    }
}

function handleRequest(
    string $method,
    string $contentType,
    string $rawBody,
    callable $loadConfig,
    callable $deliver
): array {
    if ($method !== 'POST') {
        return result(405, 'METHOD_NOT_ALLOWED');
    }
    if (strtolower(trim(explode(';', $contentType)[0])) !== 'application/json') {
        return result(415, 'UNSUPPORTED_MEDIA_TYPE');
    }
    if (strlen($rawBody) > MAX_BODY_BYTES) {
        return result(413, 'REQUEST_TOO_LARGE');
    }
    try {
        // Форма отправляет JSON, а не обычные поля PHP $_POST.
        $body = json_decode($rawBody, false, 32, JSON_THROW_ON_ERROR);
    } catch (Throwable) {
        return result(400, 'VALIDATION_ERROR');
    }
    if (!$body instanceof \stdClass) {
        return result(400, 'VALIDATION_ERROR');
    }
    if (cleanText($body->fax_number ?? null) !== '') {
        // Honeypot: имитируем успех для бота, но даже не подключаем SMTP.
        return result(200);
    }
    $data = [];
    foreach (MAX_LENGTHS as $field => $maxLength) {
        $value = cleanText($body->{$field} ?? null);
        if (jsLength($value) > $maxLength || str_contains($value, "\0")) {
            return result(400, 'VALIDATION_ERROR');
        }
        $data[$field] = $value;
    }
    foreach (['name', 'email', 'subject', 'message'] as $required) {
        if ($data[$required] === '') {
            return result(400, 'VALIDATION_ERROR');
        }
    }
    if (!validEmail($data['email']) || preg_match('/[\r\n]/', $data['name'] . $data['subject'])) {
        return result(400, 'VALIDATION_ERROR');
    }
    try {
        $config = $loadConfig();
    } catch (Throwable) {
        // Не публикуем пути сервера, содержимое конфигурации или пароль.
        error_log('FOSMARIN contact: CONFIG_LOAD_FAILED');
        return result(503, 'MAIL_NOT_CONFIGURED');
    }
    if ($config === null) {
        return result(503, 'MAIL_NOT_CONFIGURED');
    }
    try {
        $deliver($config, $data);
        // Успех означает, что SMTP-сервер принял письмо, а не гарантию «Входящих».
        return result(200);
    } catch (Throwable) {
        error_log('FOSMARIN contact: MAIL_SEND_FAILED');
        return result(500, 'MAIL_SEND_FAILED');
    }
}
