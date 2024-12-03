import { observer } from 'mobx-react';
import './style.css';

const staffInfo = {
  avatar: 'https://via.placeholder.com/60x60/000000/ffffff?text=W',
  staffname: 'Christina Wong',
  date: 'May 11, 2024',
};

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
          </p>
        </div>
      </div>
    </div>
  );
  return dom;
});
