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
    <div className="staff-card_s relative bg-[#40a0b8] ml-10 mr-15 mb-12 w-[1600px] h-[900px] box-border rounded-lg">
      <div className="staff-info_s absolute top-0 left-0 w-full text-white flex items-center p-4 mx-auto">
        <img
          src={staffInfo.avatar}
          alt="Staff Avatar"
          className="staff-avatar_s w-[30px] h-[30px] rounded-full mr-1.5 ml-2.5"
        />
        <div className="staff-details_s flex flex-row flex-grow p-2.5">
          <p className="staff-name_s font-base font-bold mr-[200px] text-white">
            {staffInfo.staffname}
          </p>
          <p className="staff-schedule-date_s font-lg m-[0] text-white">
            <button className="left-arrow_s mr-2 text-[#f01313]">{'<'}</button>
            {staffInfo.date}
            <button className="right-arrow_s ml-2 text-[#f01313]">{'>'}</button>
            {/* <Add_a_New_Class /> */}
          </p>
        </div>
        <Add_a_New_Class />
      </div>
      <div className="schedule-info_s w-[90%] top-0 left-0 ml-[80px] text-left justify-start pt-[80px] flex flex-row items-start gap-[250px]">
        <div className="time-slot_s text-lg text-white text-left mt-[30px] ml-0 box-border">
          {timeSlots.map((time, index) => (
            <div className="time_s py-5 mb-10 box-border" key={index}>
              {time}
            </div>
          ))}
        </div>
        <div className="single-schedule_s ml-10">
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
