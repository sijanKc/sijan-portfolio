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
    {
      name: 'HTML5',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#E34F26">
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17 4.7l-9.3.1.2 2.3 6.9-.1-.3 3.4-6.8.1.2 2.3h4.3l-.3 3.5-3.1 1-3.3-1-.2-2.7h-2.3l.3 5.1 5.5 1.6 5.3-1.6.8-13.6z" />
        </svg>
      ),
      proficiency: 'Advanced'
    },
    {
      name: 'CSS3',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#1572B6">
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17 4.7L6.4 4.8l.2 2.3 8.3.1-.2 2.2-8.3-.1.2 2.3h8.3l-.3 3.5-3.1 1-3.3-1-.2-2.7h-2.3l.3 5.1 5.5 1.6 5.3-1.6.8-13.6z" />
        </svg>
      ),
      proficiency: 'Advanced'
    },
    {
      name: 'JavaScript',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#F7DF1E">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.105-.705 0-.525.21-.915 2.1-.915 1.155 0 1.92.21 2.37.51.48.33.66.69.81 1.2h2.445c-.465-2.415-2.265-3.54-4.89-3.54-2.625 0-4.305.99-4.305 3.12 0 1.485.81 2.475 2.25 3.075 1.59.885 2.595.96 3.105 1.8.195.42.21.84.21 1.095 0 .78-.45 1.35-2.1 1.35-2.115 0-2.61-.915-2.85-1.65h-2.52c.165 2.205 1.83 3.69 5.31 3.69 3.54 0 4.695-1.755 4.695-3.51 0-1.155-.375-1.98-.81-2.4z" />
        </svg>
      ),
      proficiency: 'Intermediate'
    },
    {
      name: 'React',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#61DAFB">
          <path d="M23.32 10.16c.31.52.31 1.16 0 1.68l-3.32 5.75c-.31.52-.86.85-1.46.85h-6.64c-.6 0-1.15-.33-1.46-.85l-3.32-5.75c-.31-.52-.31-1.16 0-1.68l3.32-5.75c.31-.53.86-.85 1.46-.85h6.64c.6 0 1.15.33 1.46.85l3.32 5.75zM12 16a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      ),
      proficiency: 'Intermediate'
    },
    {
      name: 'Git',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#F05032">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.187 0L8.708 2.624l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.89l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72 1.94 1.48 1.94 1.48L23.546 10.93zM10.97 4.97L4.97 10.97l2.658 2.658c-.22.632-.078 1.365.438 1.88.512.512 1.246.657 1.878.441l2.658 2.659s.76 1.219 1.48 1.94c.72.721 1.49-.604 1.49-.604l-2.187-2.187V13.067L10.97 4.97z" />
        </svg>
      ),
      proficiency: 'Intermediate'
    },
    {
      name: 'MySQL',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#4479A1">
          <path d="M12 0L3.1 4.5l8.9 4.5 8.9-4.5L12 0zm0 10.5L3.1 6v9l8.9 4.5 8.9-4.5V6l-8.9 4.5zM12 21L3.1 16.5v3l8.9 4.5 8.9-4.5v-3L12 21z" />
        </svg>
      ),
      proficiency: 'Basic'
    },
    {
      name: 'Java',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#007396">
          <path d="M12.5 12c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zm0 7c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm0-9.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm0-4.5c-.8 0-1.5-.7-1.5-1.5S11.7 2 12.5 2 14 2.7 14 3.5 13.3 5 12.5 5z" />
        </svg>
      ),
      proficiency: 'Basic'
    }
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

    animateValue(0, 15, 2000, (val) => setAnimatedStats(prev => ({ ...prev, projects: val })));
    animateValue(0, 8, 2000, (val) => setAnimatedStats(prev => ({ ...prev, technologies: val })));
    animateValue(0, 500, 2000, (val) => setAnimatedStats(prev => ({ ...prev, learningHours: val })));
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
                <div className="row g-4">
                  {competencies.map((comp, index) => (
                    <div key={index} className="col-md-6">
                      <div className={styles.competencyCard}>
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
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </a>
                  <a href="/sijan-kc-resume.pdf" download className={`btn ${styles.secondaryCta}`}>
                    <span>Download CV</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4.66675 6.66667L8.00008 10L11.3334 6.66667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 10V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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