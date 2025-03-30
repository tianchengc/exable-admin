import ClassCard from '@/components/ClassCard';
import StaffCard from '@/components/StaffCard';
import React from 'react';
import styles from './ScheduleByStaff.module.css';

const StaffSchedule: React.FC = () => {
  // const navigate = useNavigate();

  // const handleNavigation = (path: string) => {
  //   navigate(path);
  // };

  return (
    <div className={styles.staffSchedulePage}>
      <div className={styles.staffContent}>
        <h1 className={styles.staffTitle}>Schedule By Staff</h1>
        <StaffCard />
      </div>
      <div className={styles.detailContent}>
        <h1 className={styles.detailTitle}>Class detail</h1>
        <ClassCard />
      </div>
    </div>
  );
};

export default StaffSchedule;
