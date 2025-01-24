import { observer } from 'mobx-react';
import './style.css';
import Add_a_New_Class from '../../add-a-new-class';
import ScheduleInfo from './schedule-info';
import { useState } from 'react';

const staffInfo = {
  avatar: 'https://via.placeholder.com/60x60/000000/ffffff?text=W',
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

export const Staff_Card = observer(() => {
  const [hoveredIndex, setIsHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const dom = (
    <div className="staff-card_s">
      <div className="staff-info_s">
        <img
          src={staffInfo.avatar}
          alt="Staff Avatar"
          className="staff-avatar_s"
        />
        <div className="staff-details_s">
          <p className="staff-name_s">{staffInfo.staffname}</p>
          <p className="staff-schedule-date_s">
            <button className="left-arrow_s">{'<'}</button>
            {staffInfo.date}
            <button className="right-arrow_s">{'>'}</button>
            {/* <Add_a_New_Class /> */}
          </p>
        </div>
        <Add_a_New_Class />
      </div>
      <div className="schedule-info_s">
        <div className="time-slot_s">
          {timeSlots.map((time, index) => (
            <div className="time_s" key={index}>
              {time}
            </div>
          ))}
        </div>
        <div className="single-schedule_s">
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
});
