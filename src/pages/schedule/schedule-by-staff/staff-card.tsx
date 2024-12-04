import { observer } from 'mobx-react';
import './style.css';
import Add_a_New_Class from '../add-a-new-class';
import ScheduleInfo from './schedule-info';

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

const timeSlots = generateTimeSlot();

export const Staff_Card = observer(() => {
  const dom = (
    <div className="staff-card">
      <div className="staff-info">
        <img
          src={staffInfo.avatar}
          alt="Staff Avatar"
          className="staff-avatar"
        />
        <div className="staff-details">
          <p className="staff-name">{staffInfo.staffname}</p>
          <p className="staff-schedule-date">
            <button className="left-arrow">{'<'}</button>
            {staffInfo.date}
            <button className="right-arrow">{'>'}</button>
            <Add_a_New_Class />
          </p>
        </div>
      </div>
      <div className="schedule-info">
        <div className="time-slot">
          {timeSlots.map((time, index) => (
            <div className="time" key={index}>
              {time}
            </div>
          ))}
        </div>
        <div className="single-schedule">
          <ScheduleInfo />
          <ScheduleInfo />
          <ScheduleInfo />
          <ScheduleInfo />
          <ScheduleInfo />
          <ScheduleInfo />
          <ScheduleInfo />
        </div>
      </div>
    </div>
  );
  return dom;
});
