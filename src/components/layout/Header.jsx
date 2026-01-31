import React, { useState, useEffect } from 'react';
import styles from './css/Header.module.css';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
          <div className="container">
            {/* Logo/Brand */}
            <a className={`navbar-brand ${styles.brand}`} href="#home">
              <span className={styles.brandMain}>SK</span>
              <span className={styles.brandDot}>.</span>
              <span className={styles.brandTech}>Dev</span>
            </a>

            {/* Mobile Toggle Button */}
            <button
              className={`navbar-toggler ${styles.navbarToggler}`}
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
            >
              <span className={styles.hamburger}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>

            {/* Navigation Menu */}
            <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show ' + styles.show : ''} ${styles.navbarCollapse}`}>
              <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${styles.navbarNav}`}>
                {navItems.map((item, index) => (
                  <li key={item.name} className="nav-item">
                    <a
                      className={`nav-link ${styles.navLink} ${activeSection === item.href.substring(1) ? styles.active : ''
                        }`}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className={styles.navText}>{item.name}</span>
                      <span className={styles.navHover}></span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className={styles.actionsContainer}>
                {/* Theme Toggle */}
                <button
                  className={styles.themeToggle}
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? '🌙' : '☀️'}
                </button>

                {/* Call to Action Button */}
                <div className={styles.ctaContainer}>
                  <a href="#contact" className={`btn ${styles.ctaButton}`}>
                    Let's Talk
                    <span className={styles.ctaIcon}>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className={styles.mobileOverlay}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;