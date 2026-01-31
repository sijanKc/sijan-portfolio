import React, { useState } from 'react';
import styles from './css/Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/xjvnqkgg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      title: 'Email',
      value: 'sijankc542@gmail.com',
      link: 'mailto:sijankc542@gmail.com'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
        </svg>
      ),
      title: 'Phone',
      value: '+977 9848251589',
      link: 'tel:+9779848251589'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
      title: 'Location',
      value: 'Kalanki, Kathmandu, Nepal',
      link: 'https://maps.google.com/?q=Kalanki,Kathmandu,Nepal'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      url: 'https://github.com/sijanKc',
      username: 'sijanKc'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: 'https://www.linkedin.com/in/sijan-k-c-4259a2296',
      username: 'sijan-k-c'
    }
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        {/* Section Header */}
        <div className="row">
          <div className="col-12">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Get In Touch</span>
              <h2 className={styles.sectionTitle}>Let's Work Together</h2>
              <div className={styles.headerDivider}></div>
              <p className={styles.sectionDescription}>
                I'm currently available for new opportunities and excited to discuss how we can work together
                to bring your ideas to life.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Contact Information */}
          <div className="col-lg-4">
            <div className={styles.contactInfo}>
              <div className={styles.availabilityBadge}>
                <div className={styles.availableDot}></div>
                <span>Available for Work</span>
              </div>

              <h3 className={styles.contactTitle}>Contact Information</h3>
              <p className={styles.contactSubtitle}>
                Feel free to reach out through any of these channels
              </p>

              {/* Contact Details */}
              <div className={styles.contactDetails}>
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className={styles.contactItem}
                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    <div className={styles.contactIcon}>{item.icon}</div>
                    <div className={styles.contactText}>
                      <span className={styles.contactLabel}>{item.title}</span>
                      <span className={styles.contactValue}>{item.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className={styles.socialSection}>
                <h4 className={styles.socialTitle}>Follow Me</h4>
                <div className={styles.socialLinks}>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      {social.icon}
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <div className={styles.contactFormSection}>
              <div className={styles.formCard}>
                <h3 className={styles.formTitle}>Send Me a Message</h3>
                <p className={styles.formSubtitle}>
                  Have a project in mind or want to discuss opportunities? I'd love to hear from you.
                </p>

                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.formLabel}>
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={styles.formInput}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.formLabel}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={styles.formInput}
                          required
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.formLabel}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={styles.formInput}
                      required
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={styles.formTextarea}
                      required
                      rows="6"
                      placeholder="Tell me about your project or opportunity..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${styles.submitBtn} ${isSubmitting ? styles.loading : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className={styles.spinner}></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className={styles.successMessage}>
                      ✅ Thank you! Your message has been sent successfully. I'll get back to you soon.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className={styles.errorMessage}>
                      ❌ There was an error sending your message. Please try again or contact me directly via email.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="row">
          <div className="col-12">
            <div className={styles.quickContact}>
              <div className={styles.quickContactContent}>
                <h3 className={styles.quickContactTitle}>Prefer a Quick Chat?</h3>
                <p className={styles.quickContactText}>
                  Feel free to call me directly or send a WhatsApp message for immediate response.
                </p>
                <div className={styles.quickContactActions}>
                  <a href="tel:+9779848251589" className={styles.phoneBtn}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/9779848251589"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappBtn}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;