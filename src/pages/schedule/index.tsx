import React from 'react';
import { useNavigate } from 'react-router'; // Ensure react-router-dom is installed as a dependency
import '../../styles/common-style.css';
import scheduleImage from '../../assets/schedule_image.svg';
import './style.css';

const SchedulePage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="schedule-page">
      {/* Main Content */}
      <main className="schedule-content">
        <div className="schedule-left">
          <h1 className="schedule-title">Schedule</h1>
          <div className="schedule-cards">
            <div className="schedule-card">
              <p className="card-title">Schedule by Staff</p>
              <button
                className="view-button_lance"
                onClick={() => handleNavigation('/staff_schedule')}
              >
                View
              </button>
            </div>
            <div className="schedule-card">
              <p className="card-title">Schedule of All Classes</p>
              <button
                className="view-button_lance"
                onClick={() => handleNavigation('/class_schedule')}
              >
                View
              </button>
            </div>
          </div>
        </div>
        <div className="schedule-right">
          <img
            src={scheduleImage}
            alt="Schedule Illustration"
            className="schedule-image"
          />
        </div>
      </main>
    </div>
  );
};

export default SchedulePage;
