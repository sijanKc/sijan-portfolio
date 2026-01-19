import React, { useState, useEffect } from 'react';
import styles from './css/Hero.module.css';
import profilePhoto from '../../assets/image/sijan.png';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const current = texts[currentText];

    if (!isDeleting && displayText === current) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentText((prev) => (prev + 1) % texts.length);
    }

    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? current.substring(0, displayText.length - 1)
          : current.substring(0, displayText.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentText, texts]);

  return (
    <section id="home" className={styles.hero}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
        <div className={styles.shape4}></div>
      </div>

      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            {/* Main Content */}
            <div className={styles.heroContent}>
              {/* Welcome Badge */}
              <div className={styles.welcomeBadge}>
                <span>👋 Welcome to my portfolio</span>
              </div>

              {/* Main Heading */}
              <h1 className={styles.heroTitle}>
                Hi, I'm <span className={styles.highlight}>Sijan KC</span>
              </h1>

              {/* Animated Typing Text */}
              <div className={styles.heroSubtitle}>
                <span className={styles.typingText}>
                  {displayText}
                  <span className={styles.cursor}>|</span>
                </span>
              </div>

              {/* Description */}
              <p className={styles.heroDescription}>
                An all rounder developer who loves building end-to-end web solutions from sleek, responsive interfaces to powerful backend systems. Always exploring new technologies to grow and innovate.
              </p>

              {/* CTA Buttons */}
              <div className={styles.ctaButtons}>
                <a href="#projects" className={`btn ${styles.primaryBtn}`}>
                  View My Work
                  <span className={styles.btnIcon}>→</span>
                </a>
                <a href="#contact" className={`btn ${styles.secondaryBtn}`}>
                  Get In Touch
                </a>
              </div>

              {/* Stats */}
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>Multiple</span>
                  <span className={styles.statLabel}>Projects</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>Practical</span>
                  <span className={styles.statLabel}>Experience</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            {/* Hero Image/Illustration */}
            <div className={styles.heroVisual}>
              <div className={styles.profileContainer}>
                {/* Profile Image Placeholder - Replace with your image */}
                <div className={styles.profileImage}>
                  <div className={styles.imagePlaceholder}>
                    <img
                      src={profilePhoto}
                      alt="Sijan KC - Software Developer"
                      className={styles.profileImg}
                    />
                  </div>

                  {/* Floating Elements */}
                  <div className={styles.floatingElement1}>
                    <span>🚀</span>
                  </div>
                  <div className={styles.floatingElement2}>
                    <span>💻</span>
                  </div>
                  <div className={styles.floatingElement3}>
                    <span>⭐</span>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className={styles.experienceBadge}>
                  <div className={styles.badgeContent}>
                    <span className={styles.badgeNumber}>Practical</span>
                    <span className={styles.badgeText}>Experience</span>
                  </div>
                </div>

                {/* Available Badge */}
                <div className={styles.availableBadge}>
                  <div className={styles.availableDot}></div>
                  <span>Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.mouse}>
            <div className={styles.wheel}></div>
          </div>
          <span className={styles.scrollText}>Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;