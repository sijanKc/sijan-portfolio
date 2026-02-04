import React from 'react';
import styles from './css/Skills.module.css';
import { skills } from '../../data/skills';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaPhp, FaPython, FaJava
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiMysql, SiCplusplus, SiFramer
} from 'react-icons/si';

const Skills = () => {
  const getIcon = (name) => {
    const iconStyles = { fontSize: '2rem' };
    switch (name.toLowerCase()) {
      case 'html5 & css3': return <div style={{ display: 'flex', gap: '5px' }}><FaHtml5 style={iconStyles} /><FaCss3Alt style={iconStyles} /></div>;
      case 'javascript (es6+)': return <FaJs style={iconStyles} />;
      case 'react.js': return <FaReact style={iconStyles} />;
      case 'git & github': return <FaGitAlt style={iconStyles} />;
      case 'node.js & express': return <div style={{ display: 'flex', gap: '5px' }}><FaNodeJs style={iconStyles} /><SiExpress style={iconStyles} /></div>;
      case 'mongodb': return <SiMongodb style={iconStyles} />;
      case 'php': return <FaPhp style={iconStyles} />;
      case 'mysql': return <SiMysql style={iconStyles} />;
      case 'python': return <FaPython style={iconStyles} />;
      case 'java': return <FaJava style={iconStyles} />;
      case 'c / c++': return <SiCplusplus style={iconStyles} />;
      case 'framer motion': return <SiFramer style={iconStyles} />;
      default: return <span>{name.charAt(0)}</span>;
    }
  };

  const allSkills = [...skills.daily, ...skills.learning, ...skills.explored];
  const scrollSkills = [...allSkills, ...allSkills, ...allSkills]; // Triple for smoother long scroll

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.headerDivider}></div>
        </div>

        <div className={styles.carouselContainer}>
          <div className={styles.scroller}>
            {scrollSkills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <div className={styles.skillIcon}>
                  {getIcon(skill.name)}
                </div>
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;