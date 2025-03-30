import React from 'react';
import '../../../styles/common-style.css';
import { Staff_Card } from './staff/staff-card';
import { Class_Card } from './class/class-card';

const Staff_Schedule: React.FC = () => {
  return (
    <div className="staff-schedule-page_s w-full overflow-x-auto">
      <div className="staff-content_s relative">
        <h1 className="staff-title_s text-2xl font-bold mt-12 mb-5 ml-10 text-[#033522]">
          Schedule By Staff
        </h1>
        <Staff_Card />
      </div>
      <div className="class-detail_s">
        <h1 className="detail-title_s text-2xl font-bold mb-5 ml-10 text-[#033522]">
          Class detail
        </h1>
        <Class_Card />
      </div>
    </div>
  );
};

export default Staff_Schedule;
