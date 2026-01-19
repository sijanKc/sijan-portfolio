import React, { useState } from 'react';
import styles from './css/Skills.module.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    {
      id: 'programming',
      name: 'Programming Languages',
      icon: '💻'
    },
    {
      id: 'frontend',
      name: 'Frontend Technologies',
      icon: '🎨'
    },
    {
      id: 'backend',
      name: 'Backend & Database',
      icon: '⚙️'
    },
    {
      id: 'tools',
      name: 'Tools & Soft Skills',
      icon: '🛠️'
    }
  ];

  const skills = [
    // Programming Languages
    {
      id: 1,
      name: 'JavaScript',
      level: 65,
      category: 'programming',
      description: 'Modern ES6+ syntax, DOM manipulation, and basic algorithms',
      status: 'moderate',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      id: 2,
      name: 'PHP',
      level: 60,
      category: 'programming',
      description: 'Basic syntax, form handling, and server-side scripting',
      status: 'moderate',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
    },
    {
      id: 3,
      name: 'Java',
      level: 55,
      category: 'programming',
      description: 'OOP concepts, basic data structures, and syntax fundamentals',
      status: 'learning',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },

    // Frontend Technologies
    {
      id: 4,
      name: 'React',
      level: 50,
      category: 'frontend',
      description: 'Currently learning components, state management, and hooks',
      status: 'learning',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      id: 5,
      name: 'HTML5',
      level: 80,
      category: 'frontend',
      description: 'Semantic markup, forms, and modern HTML features',
      status: 'moderate',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      id: 6,
      name: 'CSS3',
      level: 75,
      category: 'frontend',
      description: 'Flexbox, Grid, animations, and responsive design',
      status: 'moderate',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      id: 7,
      name: 'Bootstrap',
      level: 70,
      category: 'frontend',
      description: 'Responsive layouts, components, and utility classes',
      status: 'moderate',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
    },

    // Backend & Database
    {
      id: 8,
      name: 'Node.js',
      level: 45,
      category: 'backend',
      description: 'Learning backend development and Express.js framework',
      status: 'learning',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
      id: 9,
      name: 'MySQL',
      level: 65,
      category: 'backend',
      description: 'Database design, queries, and management with XAMPP',
      status: 'moderate',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    {
      id: 10,
      name: 'MongoDB',
      level: 40,
      category: 'backend',
      description: 'Basic NoSQL concepts and database operations',
      status: 'learning',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },

    // Tools & Soft Skills
    {
      id: 11,
      name: 'Git & GitHub',
      level: 70,
      category: 'tools',
      description: 'Version control, branching, and collaborative development',
      status: 'moderate',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
      id: 12,
      name: 'Problem Solving',
      level: 75,
      category: 'tools',
      description: 'Analytical thinking, debugging, and algorithm design',
      status: 'moderate',
      icon: '🧩'
    },
    {
      id: 13,
      name: 'Teamwork',
      level: 80,
      category: 'tools',
      description: 'Collaboration, communication, and project coordination',
      status: 'moderate',
      icon: '🤝'
    },
    {
      id: 14,
      name: 'XAMPP',
      level: 70,
      category: 'tools',
      description: 'Local server environment setup and management',
      status: 'moderate',
      icon: '🔧'
    }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'moderate': return '#38b2ac';
      case 'learning': return '#ed8936';
      default: return '#718096';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'moderate': return 'Moderate';
      case 'learning': return 'Learning';
      default: return 'Beginner';
    }
  };

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        {/* Section Header */}
        <div className="row">
          <div className="col-12">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>My Skills</span>
              <h2 className={styles.sectionTitle}>Technical & Professional Abilities</h2>
              <div className={styles.headerDivider}></div>
              <p className={styles.sectionDescription}>
                Here's an overview of my current technical skills and professional competencies.
                I believe in continuous learning and constantly strive to improve my abilities.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Journey */}
        <div className="row">
          <div className="col-12">
            <div className={styles.journeyCard}>
              <div className={styles.journeyContent}>
                <h3 className={styles.journeyTitle}>My Learning Journey</h3>
                <p className={styles.journeyDescription}>
                  Currently focused on mastering <strong>React</strong> and <strong>Node.js</strong> to become a
                  full-stack developer. Building projects and learning modern web development practices.
                </p>
                <div className={styles.learningFocus}>
                  <span className={styles.focusBadge}>React.js</span>
                  <span className={styles.focusBadge}>Node.js</span>
                  <span className={styles.focusBadge}>Java</span>
                  <span className={styles.focusBadge}>Software Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="row">
          <div className="col-12">
            <div className={styles.categoryFilters}>
              <button
                className={`${styles.categoryBtn} ${activeCategory === 'all' ? styles.active : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                <span className={styles.categoryIcon}>🌟</span>
                All Skills
              </button>
              {skillCategories.map(category => (
                <button
                  key={category.id}
                  className={`${styles.categoryBtn} ${activeCategory === category.id ? styles.active : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className={styles.categoryIcon}>{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="row">
          {filteredSkills.map(skill => (
            <div key={skill.id} className="col-lg-3 col-md-4 col-sm-6">
              <div className={styles.skillCard}>
                {/* Skill Header */}
                <div className={styles.skillHeader}>
                  <div className={styles.skillIcon}>
                    {skill.icon.startsWith('http') ? (
                      <img src={skill.icon} alt={skill.name} />
                    ) : (
                      <span>{skill.icon}</span>
                    )}
                  </div>
                  <div className={styles.skillInfo}>
                    <h4 className={styles.skillName}>{skill.name}</h4>
                    <span
                      className={styles.skillStatus}
                      style={{ color: getStatusColor(skill.status) }}
                    >
                      {getStatusText(skill.status)}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className={styles.progressSection}>
                  <div className={styles.progressHeader}>
                    <span className={styles.progressLabel}>Proficiency</span>
                    <span className={styles.progressPercentage}>{skill.level}%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>

                {/* Skill Description */}
                <p className={styles.skillDescription}>{skill.description}</p>

                {/* Learning Indicator */}
                {skill.status === 'learning' && (
                  <div className={styles.learningIndicator}>
                    <span className={styles.learningDot}></span>
                    Currently Learning
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="row">
          <div className="col-12">
            <div className={styles.skillsSummary}>
              <div className="row">
                <div className="col-md-4">
                  <div className={styles.summaryItem}>
                    <span className={styles.summaryNumber}>{skills.filter(s => s.status === 'moderate').length}</span>
                    <span className={styles.summaryLabel}>Moderate Skills</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={styles.summaryItem}>
                    <span className={styles.summaryNumber}>{skills.filter(s => s.status === 'learning').length}</span>
                    <span className={styles.summaryLabel}>Currently Learning</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={styles.summaryItem}>
                    <span className={styles.summaryNumber}>{skills.length}</span>
                    <span className={styles.summaryLabel}>Total Skills</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;