import styles from './WorkExperience.module.css';
import { FaBriefcase } from 'react-icons/fa';

const WorkExperience = () => {
  return (
    <section className={styles.workExperience}>
      <h2 className={styles.heading}>Work Experience</h2>
      <div className={styles.experience}>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}>
              <FaBriefcase size={24} color="#007bff" />
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.title}>Software Engineer at Nxtwave</h3>
              <p className={styles.timePeriod}>March 2024 - Present</p>
              <p className={styles.description}>
                Spearheading automation projects using Large Language Models (LLM) and Google Gemini API to enhance business operations.
                Developed tools including Reference Document Generator (using Python, Streamlit, OCR), GitHub Repository Analysis for assignment evaluation, and Resume Shortlisting solutions leveraging AI.
                Designed and implemented a full-stack Resume Builder with ReactJS, NodeJS, MongoDB, and integrated AI-powered content generation.
                Created assignment doability checkers and custom GPT bots to streamline workflows and improve student engagement.
                Collaborate cross-functionally to integrate AI-powered automation that increases efficiency and reduces manual effort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
