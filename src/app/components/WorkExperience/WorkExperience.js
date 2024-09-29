import styles from './WorkExperience.module.css';
import { FaBriefcase } from 'react-icons/fa'; // Import an icon for job titles

const WorkExperience = () => {
  return (
    <section className={styles.workExperience}>
      <h2 className={styles.heading}>Work Experience</h2>
      <div className={styles.experience}>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}>
              <FaBriefcase size={24} color="#007bff" /> {/* Job Icon */}
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.title}>Business Operations Associate at Nxtwave</h3>
              <p className={styles.timePeriod}>March 2024 - Present</p>
              <p className={styles.description}>Worked on various business operations and collaborated with teams.
                I manage and oversee all internal business operations, ensuring that various departments within the organization work seamlessly to achieve business objectives</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
