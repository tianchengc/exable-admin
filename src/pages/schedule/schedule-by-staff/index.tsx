import React from 'react';
import { useNavigate } from 'react-router'; // Ensure react-router-dom is installed as a dependency
import '../../../styles/common-style.css';
import { Page } from '../../../components/page';
import './style.css';
import { Staff_Card } from './staff-card';

const Staff_Schedule: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Page title="staff-schedule">
      <div className="staff-schedule-page">
        <div className="staff-content">
          <h1 className="staff-title">Schedule By Staff</h1>
          <Staff_Card />
        </div>
      </div>
    </Page>
  );
};

export default Staff_Schedule;
