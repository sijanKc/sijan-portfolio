import React, { useState, useEffect } from 'react';
import styles from './css/Hero.module.css';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['Full Stack Developer', 'Software Developer', 'Problem Solver', 'Code'];

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 80;
    const current = texts[currentText];

    if (!isDeleting && displayText === current) {
      setTimeout(() => setIsDeleting(true), 1500);
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
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                I'm <span className={styles.highlight}>Sijan KC</span>
              </h1>

              <div className={styles.heroSubtitle}>
                <span className={styles.typingText}>
                  {displayText}
                  <span className={styles.cursor}>|</span>
                </span>
              </div>

              <div className={styles.heroDescription}>
                <p>
                  I’m Sijan KC, a curious and driven developer from Nepal. Every day, I hunger to learn new technologies, solve challenges, and build projects that push my limits. I turn ideas into code and keep growing with every line I write.
                </p>
              </div>

              <div className={styles.socialIcons}>
                <a href="https://github.com/sijanKc" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="GitHub">
                  <FaGithub size={28} />
                </a>
                <a href="https://www.linkedin.com/in/sijan-k-c-4259a2296" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="LinkedIn">
                  <FaLinkedin size={28} />
                </a>
                <a href="https://www.facebook.com/ceejan.khatri.2025" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Facebook">
                  <FaFacebook size={28} />
                </a>
              </div>

              <div className={styles.ctaButtons}>
                <a href="/resume.pdf" target="_blank" className={`btn ${styles.primaryBtn}`}>
                  Get My Resume
                </a>
                <a href="#contact" className={`btn ${styles.secondaryBtn}`}>
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <motion.div
              className={styles.heroVisual}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className={styles.codeCard}>
                <div className={styles.codeHeader}>
                  <div className={styles.dotRed}></div>
                  <div className={styles.dotYellow}></div>
                  <div className={styles.dotGreen}></div>
                  <span className={styles.fileName}>about_me.js</span>
                </div>
                <div className={styles.codeBody}>
                  <div className={styles.codeLine}><span className={styles.keyword}>const</span> <span className={styles.variable}>sijan</span> = {'{'}</div>
                  <div className={styles.codeLine}>&nbsp;&nbsp;role: <span className={styles.string}>'Developer'</span>,</div>
                  <div className={styles.codeLine}>&nbsp;&nbsp;location: <span className={styles.string}>'Nepal'</span>,</div>
                  <div className={styles.codeLine}>&nbsp;&nbsp;status: <span className={styles.string}>'Learning'</span></div>
                  <div className={styles.codeLine}>{'}'};</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
