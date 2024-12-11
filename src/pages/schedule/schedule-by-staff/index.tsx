import React from 'react';
import '../../../styles/common-style.css';
import './style.css';
import { Staff_Card } from './staff/staff-card';
import { Class_Card } from './class/class-card';

const Staff_Schedule: React.FC = () => {
  // const navigate = useNavigate();

  // const handleNavigation = (path: string) => {
  //   navigate(path);
  // };

  return (
    // <Page title="staff-schedule_s">
    <div className="staff-schedule-page_s">
      <div className="staff-content_s">
        <h1 className="staff-title_s">Schedule By Staff</h1>
        <Staff_Card />
      </div>
      <div className="class-detail_s">
        <h1 className="detail-title_s">Class detail</h1>
        <Class_Card />
      </div>
    </div>
    // </Page>
  );
};

export default Staff_Schedule;
