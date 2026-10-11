import nodemailer from 'nodemailer';

const MAX_LENGTHS = {
  name: 120,
  email: 254,
  organisation: 200,
  subject: 200,
  message: 5000,
};

function cleanText(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

let transporter;

function getMailConfig() {
  const config = {
    host: cleanText(process.env.SMTP_HOST),
    port: Number(process.env.SMTP_PORT),
    user: cleanText(process.env.SMTP_USER),
    pass: process.env.SMTP_PASS,
    from: cleanText(process.env.SMTP_FROM),
    to: cleanText(process.env.SMTP_TO),
  };

  // Эта конфигурация рассчитана на easyname: порт 465, SSL/TLS.
  if (
    !config.host ||
    config.port !== 465 ||
    !config.user ||
    !config.pass ||
    !isValidEmail(config.from) ||
    !isValidEmail(config.to)
  ) {
    return null;
  }

  return config;
}

function getTransporter(config) {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: true,
      auth: {
        user: config.user,
        pass: config.pass,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 20000,
      dnsTimeout: 10000,
      disableFileAccess: true,
      disableUrlAccess: true,
    });
  }

  return transporter;
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');

    return response.status(405).json({
      ok: false,
      code: 'METHOD_NOT_ALLOWED',
    });
  }

  const body = request.body ?? {};

  const faxNumber = cleanText(body.fax_number);

  // Honeypot: заполненное скрытое поле означает вероятного бота.
  // Возвращаем успех, но письмо не отправляем.
  if (faxNumber) {
    return response.status(200).json({
      ok: true,
    });
  }

  const formData = {
    name: cleanText(body.name),
    email: cleanText(body.email),
    organisation: cleanText(body.organisation),
    subject: cleanText(body.subject),
    message: cleanText(body.message),
  };

  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    return response.status(400).json({
      ok: false,
      code: 'VALIDATION_ERROR',
    });
  }

  // Имя и тема используются в заголовках письма:
  // переводы строк в этих полях не допускаем.
  if (!isValidEmail(formData.email) || /[\r\n]/.test(formData.name) || /[\r\n]/.test(formData.subject)) {
    return response.status(400).json({
      ok: false,
      code: 'VALIDATION_ERROR',
    });
  }

  const hasOversizedField = Object.entries(MAX_LENGTHS).some(
    ([field, maxLength]) => formData[field].length > maxLength,
  );

  if (hasOversizedField) {
    return response.status(400).json({
      ok: false,
      code: 'VALIDATION_ERROR',
    });
  }

  const mailConfig = getMailConfig();

  if (!mailConfig) {
    return response.status(503).json({
      ok: false,
      code: 'MAIL_NOT_CONFIGURED',
    });
  }

  try {
    const result = await getTransporter(mailConfig).sendMail({
      from: {
        name: 'FOSMARIN website',
        address: mailConfig.from,
      },
      to: mailConfig.to,
      replyTo: {
        name: formData.name,
        address: formData.email,
      },
      subject: `FOSMARIN contact form: ${formData.subject}`,
      text: [
        'New message from the FOSMARIN contact form',
        '',
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Organisation: ${formData.organisation || 'Not specified'}`,
        `Subject: ${formData.subject}`,
        '',
        'Message:',
        formData.message,
      ].join('\n'),
    });

    if (!result.accepted?.length) {
      throw new Error('SMTP server did not accept the recipient');
    }

    return response.status(200).json({
      ok: true,
    });
  } catch (error) {
    // Не записываем в логи пароль и содержимое сообщения.
    console.error('Contact form SMTP delivery failed:', error.code || 'SEND_FAILED');

    return response.status(500).json({
      ok: false,
      code: 'MAIL_SEND_FAILED',
    });
  }
}
