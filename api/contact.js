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

  // Honeypot:
  // real users never see or fill this field.
  // Many simple bots fill every text input they find.
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

  if (!isValidEmail(formData.email)) {
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

  /*
   * SMTP delivery will be connected here when the client provides
   * the mail settings.
   *
   * Until then we deliberately return an error instead of pretending
   * that the message was delivered successfully.
   */
  return response.status(503).json({
    ok: false,
    code: 'MAIL_NOT_CONFIGURED',
  });
}
