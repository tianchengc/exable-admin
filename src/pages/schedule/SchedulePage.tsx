import React from 'react';
import { useNavigate } from 'react-router';
import scheduleImage from '../../assets/schedule_image.svg';
import styles from './Schedule.module.css';
import Button from '@components/Button';

const SchedulePage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.schedulePage}>
      <div className={styles.scheduleLeft}>
        <h1 className={styles.scheduleTitle}>Schedule</h1>
        <div className={styles.scheduleCards}>
          <div className={styles.scheduleCard}>
            <p className={styles.cardTitle}>Schedule by Staff</p>
            <Button
              category='primary'
              width='small'
              onClick={() => handleNavigation('/staff_schedule')}
            >View</Button>
          </div>
          <div className={styles.scheduleCard}>
            <p className={styles.cardTitle}>Schedule of All Classes</p>
            <Button
              category='primary'
              width='small'
              onClick={() => handleNavigation('/class_schedule')}
            >View</Button>
          </div>
        </div>
      </div>

      <div className={styles.scheduleRight}>
        <img
          src={scheduleImage}
          alt="Schedule Illustration"
          className={styles.scheduleImage}
        />
      </div>
    </div>
  );
};

export default SchedulePage;
