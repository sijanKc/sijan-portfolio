import React, { useState } from 'react';
import styles from './css/Projects.module.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'QuizHub Application',
      description: 'A comprehensive full-stack quiz platform enabling users to take quizzes, track scores, and monitor progress with real-time analytics.',
      fullDescription: 'QuizHub is a complete web-based quiz platform built with modern web technologies. It features user authentication, score tracking, and a comprehensive admin panel for quiz management. The platform supports multiple quiz categories, timed tests, and detailed performance analytics.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: '🎯',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'XAMPP'],
      category: 'fullstack',
      github: 'https://github.com/sijanKc/Quizhub',
      demo: '#',
      features: [
        'User Authentication & Authorization',
        'Real-time Score Tracking',
        'Quiz Category Management',
        'Performance Analytics Dashboard',
        'Responsive Design',
        'Database Management with MySQL'
      ],
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Paper Trading Platform',
      description: 'A stock trading simulator built with React.js that provides a realistic trading experience without financial risk.',
      fullDescription: 'Paper Trading Platform is a React-based stock market simulator that allows users to practice trading with virtual money. It features real-time market data visualization, portfolio management, and trading history with interactive charts and responsive design.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      icon: '📈',
      technologies: ['React.js', 'JavaScript', 'Bootstrap', 'CSS3', 'HTML5'],
      category: 'frontend',
      github: 'https://github.com/sijanKc/PaperTrading',
      demo: '#',
      features: [
        'Real-time Trading Simulation',
        'Interactive Stock Charts',
        'Portfolio Management',
        'Responsive UI Components',
        'State Management',
        'Dynamic Data Rendering'
      ],
      status: 'Completed'
    },
    {
      id: 3,
      title: 'TaskFlow Manager',
      description: 'A modern task management application with drag-and-drop functionality and team collaboration features.',
      fullDescription: 'TaskFlow Manager is a collaborative project management tool that helps teams organize tasks efficiently. It features Kanban-style boards, real-time updates, file attachments, and progress tracking with an intuitive drag-and-drop interface.',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      icon: '✅',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io'],
      category: 'fullstack',
      github: '#',
      demo: '#',
      features: [
        'Drag & Drop Interface',
        'Real-time Collaboration',
        'Team Management',
        'File Attachments',
        'Progress Analytics',
        'Mobile Responsive'
      ],
      status: 'In Progress'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        {/* Section Header */}
        <div className="row">
          <div className="col-12">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>My Work</span>
              <h2 className={styles.sectionTitle}>Featured Projects</h2>
              <div className={styles.headerDivider}></div>
              <p className={styles.sectionDescription}>
                Here are some of my recent projects that showcase my skills in full-stack development, 
                problem-solving, and creating user-friendly applications.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="row">
          <div className="col-12">
            <div className={styles.filterButtons}>
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`${styles.filterBtn} ${activeFilter === category.id ? styles.active : ''}`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid - UPDATED */}
        <div className="row">
          {filteredProjects.map(project => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <div className={styles.projectCard}>
                {/* Project Image - UPDATED with Gradient + Icon */}
                <div className={styles.projectImage}>
                  <div 
                    className={styles.gradientBackground}
                    style={{ background: project.gradient }}
                  >
                    <div className={styles.projectIcon}>{project.icon}</div>
                  </div>
                  <div className={styles.projectOverlay}>
                    <div className={styles.projectActions}>
                      <button 
                        className={styles.viewBtn}
                        onClick={() => openProjectModal(project)}
                      >
                        View Details
                      </button>
                      <div className={styles.actionLinks}>
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={styles.githubLink}
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                        {project.demo && project.demo !== '#' && (
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.demoLink}
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2V9h2v8z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.projectStatus}>
                    <span className={`${styles.statusBadge} ${project.status === 'Completed' ? styles.completed : styles.inProgress}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  
                  {/* Technologies */}
                  <div className={styles.technologies}>
                    {project.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className={styles.techTag}>{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className={styles.moreTech}>+{project.technologies.length - 4} more</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="row">
          <div className="col-12">
            <div className={styles.ctaSection}>
              <h3 className={styles.ctaTitle}>Interested in seeing more?</h3>
              <p className={styles.ctaDescription}>
                Check out my GitHub profile for more projects and code samples.
              </p>
              <a 
                href="https://github.com/sijanKc" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.githubCta}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Visit My GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal - UPDATED */}
      {selectedProject && (
        <div className={styles.modalOverlay} onClick={closeProjectModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeProjectModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            
            <div className={styles.modalBody}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={styles.modalImage}>
                    <div 
                      className={styles.modalGradient}
                      style={{ background: selectedProject.gradient }}
                    >
                      <div className={styles.modalProjectIcon}>{selectedProject.icon}</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styles.modalDetails}>
                    <h3>{selectedProject.title}</h3>
                    <p className={styles.modalDescription}>{selectedProject.fullDescription}</p>
                    
                    <div className={styles.projectInfo}>
                      <div className={styles.infoItem}>
                        <span className={styles.infoLabel}>Status:</span>
                        <span className={`${styles.status} ${selectedProject.status === 'Completed' ? styles.completed : styles.inProgress}`}>
                          {selectedProject.status}
                        </span>
                      </div>
                      <div className={styles.infoItem}>
                        <span className={styles.infoLabel}>Category:</span>
                        <span className={styles.category}>{selectedProject.category}</span>
                      </div>
                    </div>

                    <div className={styles.featuresList}>
                      <h5>Key Features:</h5>
                      <ul>
                        {selectedProject.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.technologiesList}>
                      <h5>Technologies Used:</h5>
                      <div className={styles.techTags}>
                        {selectedProject.technologies.map(tech => (
                          <span key={tech} className={styles.techTag}>{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className={styles.modalActions}>
                      <a 
                        href={selectedProject.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.githubBtn}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View Code
                      </a>
                      {selectedProject.demo && selectedProject.demo !== '#' && (
                        <a 
                          href={selectedProject.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={styles.demoBtn}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2V9h2v8z"/>
                          </svg>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;