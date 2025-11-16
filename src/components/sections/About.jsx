import React, { useState, useEffect } from 'react';
import styles from './css/About.module.css';

const About = () => {
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    technologies: 0,
    learningHours: 0
  });

  const skills = [
    { name: 'Frontend Development', level: 75, category: 'Development' },
    { name: 'JavaScript & React', level: 70, category: 'Development' },
    { name: 'UI/UX Design', level: 65, category: 'Design' },
    { name: 'Python Programming', level: 60, category: 'Development' },
    { name: 'Database Management', level: 55, category: 'Development' },
    { name: 'Problem Solving', level: 80, category: 'Soft Skills' }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Application (BCA)',
      institution: 'Affiliated to Tribhuvan University',
      year: '2022 - Present',
      description: 'Comprehensive curriculum covering software engineering principles, database systems, and web technologies',
      status: 'In Progress'
    }
  ];

  const competencies = [
    {
      icon: '🚀',
      title: 'Rapid Learning',
      description: 'Quickly adapt to new technologies and frameworks with strong foundational knowledge'
    },
    {
      icon: '💡',
      title: 'Problem-Solving Mindset',
      description: 'Analytical approach to breaking down complex problems into manageable solutions'
    },
    {
      icon: '🔧',
      title: 'Technical Aptitude',
      description: 'Strong grasp of programming fundamentals and software development principles'
    },
    {
      icon: '🌟',
      title: 'Quality Focus',
      description: 'Commitment to writing clean, maintainable code and following best practices'
    }
  ];

  const techStack = [
    { name: 'HTML5', icon: '🌐', proficiency: 'Advanced' },
    { name: 'CSS3', icon: '🎨', proficiency: 'Advanced' },
    { name: 'JavaScript', icon: '⚡', proficiency: 'Intermediate' },
    { name: 'React', icon: '⚛️', proficiency: 'Intermediate' },
    { name: 'Git', icon: '📚', proficiency: 'Intermediate' },
    { name: 'MySQL', icon: '🗄️', proficiency: 'Basic' },
    { name: 'Java', icon: '☕', proficiency: 'Basic' }
  ];

  useEffect(() => {
    // Animate stats
    const animateValue = (start, end, duration, setter) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        setter(value);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    animateValue(0, 15, 2000, (val) => setAnimatedStats(prev => ({...prev, projects: val})));
    animateValue(0, 8, 2000, (val) => setAnimatedStats(prev => ({...prev, technologies: val})));
    animateValue(0, 500, 2000, (val) => setAnimatedStats(prev => ({...prev, learningHours: val})));
  }, []);

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        {/* Section Header */}
        <div className="row">
          <div className="col-12">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>About Me</span>
              <h2 className={styles.sectionTitle}>Crafting Digital Solutions Through Code</h2>
              <div className={styles.headerDivider}></div>
              <p className={styles.sectionDescription}>
                Passionate software developer in training, dedicated to building innovative solutions 
                and continuously expanding my technical expertise.
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-start">
          {/* Main Content Column */}
          <div className="col-lg-6">
            <div className={styles.profileOverview}>
              {/* Professional Intro */}
              <div className={styles.professionalIntro}>
                <h3 className={styles.introTitle}>
                  Transforming Ideas into <span className={styles.highlight}>Digital Reality</span>
                </h3>
                <div className={styles.introContent}>
                  <p>
                    I'm <strong>Sijan KC</strong>, a dedicated BCA student and aspiring software developer 
                    based in Kathmandu, originally from the historic city of Gorkha. My journey in 
                    technology is driven by a passion for creating meaningful digital experiences 
                    and solving real-world problems through code.
                  </p>
                  <p>
                    While I'm at the beginning of my professional journey, I bring a strong foundation 
                    in modern web technologies, a commitment to continuous learning, and a fresh 
                    perspective that embraces innovation and best practices in software development.
                  </p>
                </div>
              </div>

              {/* Key Competencies */}
              <div className={styles.competenciesSection}>
                <h4 className={styles.competenciesTitle}>Core Competencies</h4>
                <div className="row">
                  {competencies.map((comp, index) => (
                    <div key={index} className="col-md-6">
                      <div className={styles.competencyCard}>
                        <div className={styles.competencyIcon}>{comp.icon}</div>
                        <h5 className={styles.competencyName}>{comp.title}</h5>
                        <p className={styles.competencyDesc}>{comp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Skills Column */}
          <div className="col-lg-6">
            <div className={styles.statsSkillsSection}>
              
              {/* Achievement Stats */}
              <div className={styles.statsCard}>
                <h4 className={styles.statsTitle}>Learning Journey</h4>
                <div className="row">
                  <div className="col-md-4">
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>{animatedStats.projects}+</span>
                      <span className={styles.statLabel}>Projects Completed</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>{animatedStats.technologies}+</span>
                      <span className={styles.statLabel}>Technologies</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>{animatedStats.learningHours}+</span>
                      <span className={styles.statLabel}>Learning Hours</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div className={styles.skillsCard}>
                <h4 className={styles.skillsTitle}>Technical Proficiency</h4>
                <div className={styles.skillsGrid}>
                  {skills.map((skill, index) => (
                    <div key={skill.name} className={styles.skillItem}>
                      <div className={styles.skillHeader}>
                        <div className={styles.skillInfo}>
                          <span className={styles.skillName}>{skill.name}</span>
                          <span className={styles.skillCategory}>{skill.category}</span>
                        </div>
                        <span className={styles.skillPercentage}>{skill.level}%</span>
                      </div>
                      <div className={styles.skillBar}>
                        <div 
                          className={styles.skillProgress}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className={styles.techStackCard}>
                <h4 className={styles.techStackTitle}>Technology Stack</h4>
                <div className={styles.techStackGrid}>
                  {techStack.map((tech, index) => (
                    <div key={tech.name} className={styles.techItem}>
                      <span className={styles.techIcon}>{tech.icon}</span>
                      <div className={styles.techInfo}>
                        <span className={styles.techName}>{tech.name}</span>
                        <span className={`${styles.techProficiency} ${styles[tech.proficiency.toLowerCase()]}`}>
                          {tech.proficiency}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Call to Action */}
        <div className="row">
          <div className="col-lg-8">
            <div className={styles.educationSection}>
              <h4 className={styles.educationTitle}>Education & Qualifications</h4>
              <div className={styles.educationTimeline}>
                {education.map((edu, index) => (
                  <div key={index} className={styles.educationItem}>
                    <div className={styles.eduHeader}>
                      <div className={styles.eduMain}>
                        <h5 className={styles.degree}>{edu.degree}</h5>
                        <span className={styles.institution}>{edu.institution}</span>
                      </div>
                      <div className={styles.eduMeta}>
                        <span className={styles.yearBadge}>{edu.year}</span>
                        <span className={styles.statusBadge}>{edu.status}</span>
                      </div>
                    </div>
                    <p className={styles.eduDescription}>{edu.description}</p>
                    <div className={styles.courseHighlights}>
                      <span>Software Engineering</span>
                      <span>Database Systems</span>
                      <span>Web Technologies</span>
                      <span>Data Structures</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className={styles.ctaSection}>
              <div className={styles.ctaCard}>
                <h5 className={styles.ctaTitle}>Start a Conversation</h5>
                <p className={styles.ctaDescription}>
                  Interested in collaborating or discussing technology opportunities?
                </p>
                <div className={styles.ctaButtons}>
                  <a href="#contact" className={`btn ${styles.primaryCta}`}>
                    <span>Get In Touch</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a href="/sijan-kc-resume.pdf" download className={`btn ${styles.secondaryCta}`}>
                    <span>Download CV</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.66675 6.66667L8.00008 10L11.3334 6.66667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 10V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
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

export default About;