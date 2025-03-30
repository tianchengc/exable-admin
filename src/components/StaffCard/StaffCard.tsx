import AddClass from '../AddClass/AddClass';
import { useState } from 'react';
import { ScheduleInfo } from './ScheduleInfo';
import styles from './StaffCard.module.css';

const staffInfo = {
  avatar: 'src/assets/participants.svg',
  staffname: 'Christina Wong',
  date: 'May 11, 2024',
};

const generateTimeSlot = () => {
  const startHour = 10;
  const endHour = 16;
  const timeSlot = [];

  for (let hour = startHour; hour <= endHour; hour++) {
    const am_pm = hour < 12 ? 'am' : 'pm';
    const formatedHour = hour % 12 == 0 ? 12 : hour % 12;
    timeSlot.push(`${formatedHour}:00${am_pm}`);
  }
  return timeSlot;
};

const scheduleData = [
  {
    title: 'Group Exercise',
    session: '8/20',
    capacity: '10/15',
    isEmpty: false,
  },
  { isEmpty: true },
  {
    title: 'Group Exercise',
    session: '10/20',
    capacity: '10/15',
    isEmpty: false,
  },
  {
    title: 'Group Exercise',
    session: '8/20',
    capacity: '10/15',
    isEmpty: false,
  },
  { isEmpty: true },
  { isEmpty: true },
  {
    title: 'Group Exercise',
    session: '8/20',
    capacity: '10/15',
    isEmpty: false,
  },
];

const timeSlots = generateTimeSlot();

export const StaffCard = () => {
  const [hoveredIndex, setIsHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const dom = (
    <div className={styles.staffCard}>
      <div className={styles.staffInfo}>
        <img
          src={staffInfo.avatar}
          alt="Staff Avatar"
          className={styles.staffAvater}
        />
        <div className={styles.staffDetails}>
          <p className={styles.staffName}>{staffInfo.staffname}</p>
          <p className={styles.staffScheduleDate}>
            <button className={styles.leftArrow}>{'<'}</button>
            {staffInfo.date}
            <button className={styles.rightArrow}>{'>'}</button>
          </p>
        </div>
        <AddClass />
      </div>
      <div className={styles.scheduleInfo}>
        <div className={styles.timeSlot}>
          {timeSlots.map((time, index) => (
            <div className={styles.time} key={index}>
              {time}
            </div>
          ))}
        </div>
        <div className={styles.singleSchedule}>
          {scheduleData.map((item, index) => (
            <ScheduleInfo
              key={index}
              data={item}
              isHovered={hoveredIndex === index}
              isClicked={selectedIndex === index}
              onMouseEnter={() => setIsHoveredIndex(index)}
              onMouseLeave={() => setIsHoveredIndex(null)}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
  return dom;
};

export default StaffCard;