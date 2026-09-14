import { useState } from 'react';

import Reveal from './Reveal';

const initialFormData = {
  name: '',
  email: '',
  organisation: '',
  subject: '',
  message: '',
};

function ContactFormSection({ id }) {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: '',
    }));

    setSubmitted(false);
  }

  function validateForm() {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Please enter your message.';
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
  }

  return (
    <section className='contact-section contact-form-section' id={id} aria-labelledby='contact-form-title'>
      <div className='contact-inner'>
        <Reveal as='header' className='contact-section-header'>
          <p className='contact-eyebrow'>Contact form</p>

          <h2 id='contact-form-title'>Send us a message.</h2>

          <p className='contact-section-intro'>
            Use the form below to contact the FOSMARIN consortium. Required fields are marked with an asterisk.
          </p>
        </Reveal>

        <Reveal>
          <form className='contact-form' onSubmit={handleSubmit} noValidate>
            <div className='contact-form-grid'>
              <div className='contact-field'>
                <label htmlFor='contact-name'>
                  Name <span aria-hidden='true'>*</span>
                </label>

                <input
                  id='contact-name'
                  name='name'
                  type='text'
                  autoComplete='name'
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                />

                {errors.name && (
                  <p className='contact-field-error' id='contact-name-error'>
                    {errors.name}
                  </p>
                )}
              </div>

              <div className='contact-field'>
                <label htmlFor='contact-email'>
                  Email <span aria-hidden='true'>*</span>
                </label>

                <input
                  id='contact-email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                />

                {errors.email && (
                  <p className='contact-field-error' id='contact-email-error'>
                    {errors.email}
                  </p>
                )}
              </div>

              <div className='contact-field'>
                <label htmlFor='contact-organisation'>Organisation</label>

                <input
                  id='contact-organisation'
                  name='organisation'
                  type='text'
                  autoComplete='organization'
                  value={formData.organisation}
                  onChange={handleChange}
                />
              </div>

              <div className='contact-field'>
                <label htmlFor='contact-subject'>
                  Subject <span aria-hidden='true'>*</span>
                </label>

                <input
                  id='contact-subject'
                  name='subject'
                  type='text'
                  value={formData.subject}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                />

                {errors.subject && (
                  <p className='contact-field-error' id='contact-subject-error'>
                    {errors.subject}
                  </p>
                )}
              </div>
            </div>

            <div className='contact-field contact-field--message'>
              <label htmlFor='contact-message'>
                Message <span aria-hidden='true'>*</span>
              </label>

              <textarea
                id='contact-message'
                name='message'
                rows='8'
                value={formData.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
              />

              {errors.message && (
                <p className='contact-field-error' id='contact-message-error'>
                  {errors.message}
                </p>
              )}
            </div>

            <div className='contact-form-footer'>
              <p className='contact-form-note'>
                Form submission will be connected to the project&apos;s selected email or backend service before launch.
              </p>

              <button className='contact-submit' type='submit'>
                Send message
              </button>
            </div>

            {submitted && (
              <div className='contact-form-status' role='status'>
                The form is validated correctly. Final message delivery will be enabled before launch.
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default ContactFormSection;
