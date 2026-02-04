import React, { useState } from 'react';
import styles from './css/Projects.module.css';
import { projects } from '../../data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.headerDivider}></div>
        </div>

        {/* Project Grid */}
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-6">
              <div
                className={styles.projectCard}
                onClick={() => openProjectModal(project)}
              >
                <div className={styles.projectImageContainer}>
                  {project.video ? (
                    <video
                      src={project.video}
                      className={styles.projectVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <div className={styles.gradientBackground}>
                      <span style={{ fontSize: '4rem' }}>🚀</span>
                    </div>
                  )}
                  <div className={styles.imageOverlay}>
                    <span className={styles.viewLabel}>View Details</span>
                  </div>
                </div>

                <div className={styles.projectContent}>
                  <div className={styles.contentTop}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <div className={styles.cardActions}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.githubLink}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Source Code
                      </a>
                    </div>
                  </div>

                  <p className={styles.projectDescription}>{project.description}</p>

                  <div className={styles.technologies}>
                    {project.tech.map(t => (
                      <span key={t} className={styles.techTag}>{t}</span>
                    ))}
                  </div>

                  <button
                    className={styles.storyBtn}
                    onClick={() => openProjectModal(project)}
                  >
                    The Story Behind It
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className={styles.modalOverlay} onClick={closeProjectModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeProjectModal}>✕</button>

            <div className={styles.modalBody}>
              <div className="row">
                <div className="col-lg-12">
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h2 style={{ fontWeight: 700 }}>{selectedProject.title}</h2>
                    <div className={styles.technologies} style={{ marginTop: '0.5rem' }}>
                      {selectedProject.tech.map(t => (
                        <span key={t} className={styles.techTag}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styles.modalVisualContainer}>
                    <video
                      src={selectedProject.video}
                      className={styles.modalVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styles.modalDetails}>
                    <div className={styles.storySection}>
                      <h5 className={styles.modalSectionTitle}>The Story</h5>
                      <p className={styles.modalDescription}>{selectedProject.story}</p>
                    </div>

                    <div className={styles.lessonSection}>
                      <h5 className={styles.modalSectionTitle}>Key Lesson</h5>
                      <p className={styles.modalDescription}>
                        <em>{selectedProject.lesson}</em>
                      </p>
                    </div>

                    <div className={styles.modalActions}>
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.modalGithubBtn}
                      >
                        View Repository
                      </a>
                      {selectedProject.demo && selectedProject.demo !== '#' && (
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.modalDemoBtn}
                        >
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
