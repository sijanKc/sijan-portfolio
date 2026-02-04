import React from 'react';
import styles from './css/About.module.css';
import { education } from '../../data/skills';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.headerDivider}></div>
        </div>

        <div className="row g-5">
          <div className="col-lg-7">
            <div className={styles.introContent}>
              <h4 className={styles.storyTitle}>A little about my path...</h4>
              <p>
                My journey into coding started back in class 9. I was in computer lab session when I wrote my program in QBasic. At first coding was something we had to do in class.. Then coding started to get really interesting for me. It sparked my curiosity about coding. I became very curious, about coding. I wanted to learn more about coding.
              </p>
              <p>
                I started to get into coding after I began my bachelors studies. What I liked most about coding was finding the mistakes, in the code. Fixing them. I also liked solving problems by thinking about them in a way. Coding lets me be creative too. I like to think of ideas and then make them happen by turning them into real projects. I love coding. I love solving problems with logical thinking and debugging code.
              </p>
            </div>
          </div>

          <div className="col-lg-5">
            <div className={styles.educationCard}>
              <h4 className={styles.educationTitle}>Education</h4>
              {education.map((edu, index) => (
                <div key={index} className={styles.educationItem} style={{ padding: '1.2rem', marginBottom: '1rem' }}>
                  <h5 className={styles.degree} style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{edu.degree}</h5>
                  <div className={styles.institution} style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>{edu.institution}</div>
                  <div className={styles.year} style={{ fontSize: '0.8rem', opacity: 0.7 }}>{edu.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
