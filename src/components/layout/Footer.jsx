import React from 'react';
import styles from './css/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/sijanKc' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sijan-k-c-4259a2296' },
    { name: 'Facebook', url: 'https://www.facebook.com/ceejan.khatri.2025' },
    { name: 'Email', url: 'mailto:sijankc542@gmail.com' }
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.brand}>
            <span>Sijan KC</span>
            <p style={{ fontSize: '0.8rem', fontWeight: 400, opacity: 0.7, marginTop: '0.2rem' }}>
              Building things with code.
            </p>
          </div>

          <div className={styles.socialLinks}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                {social.name}
              </a>
            ))}
          </div>

          <div className={styles.copyright}>
            <p>&copy; {currentYear} • Built in Kathmandu</p>
            <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>Developed by Sijan KC</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
