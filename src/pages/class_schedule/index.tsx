import React, { useRef } from 'react';
import '../../styles/common-style.css';
import './style.css';

const ClassSchedule: React.FC = () => {
  const scheduleGridRef = useRef<HTMLDivElement | null>(null);

  const scrollRight = () => {
    if (scheduleGridRef.current) {
      scheduleGridRef.current.scrollBy({ left: 600, behavior: 'smooth' });
    }
  };

  return (
    <div className="class-schedule-page" style={{ overflowX: 'auto', width: '100%' }}>
      {/* Main Content */}
      <main className="schedule-content-1" >
        {/* Left Section */}
        <div className="schedule-left">
          <h1 className="schedule-title">Schedule of All Classes</h1>

          {/* New Container for Add Button and Weekly Schedule */}
          <div className="button-and-grid" style={{ overflowY: 'visible', height: 'auto' }}>
            <div style={{ textAlign: 'right', marginBottom: '20px' }}>
              <button className="add-class-button">+ Add a new class</button>
            </div>
            <div style={{ textAlign: 'right', marginBottom: '20px' }}>
              <button className="scroll-right-button" onClick={scrollRight} style={{ marginLeft: '10px', width: '10px', height: '10px', color: 'red', fontSize: '30px'}}>&gt;</button>
            </div>

            {/* Weekly Schedule */}
            <section className="weekly-schedule">
              <div className="schedule-grid" ref={scheduleGridRef}>
                {/* Weekdays Header */}
                <div className="schedule-grid-header">
                  <div className="time-label"></div>
                  <div className="weekday">Monday</div>
                  <div className="weekday">Tuesday</div>
                  <div className="weekday">Wednesday</div>
                  <div className="weekday">Thursday</div>
                  <div className="weekday">Friday</div>
               {/*    <div className="weekday">Saturday</div>
                  <div className="weekday">Sunday</div> */}
                </div>

                {/* Schedule Grid */}
                <div className="schedule-grid-body">
                  {/* Time Slots and Classes */}
                  {["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"].map((time, timeIdx) => (
                    <React.Fragment key={timeIdx}>
                      <div className="time-slot">{time}</div>
                      {[...Array(5)].map((_, dayIdx) => (
                        <div key={dayIdx} className="class-cell">
                          {/* Example Class Card - Replace with dynamic data */}
                          {(time === '11:00 AM' && dayIdx === 0) || (time === '1:00 PM' && dayIdx === 3) ? (
                            <div className="class-card">
                              <div className="class-name">Group Exercise 2</div>
                              <div className="session-participants-wrapper">
                                <div className="session-info">Session 8/20</div>
                                <div className="participants-info">
                                  <div className="participants-text">👥 10/15</div>
                                </div>
                              </div>
                              <button className="view-button-1">View</button>
                            </div>
                          ) : (
                            <div className="empty-cell"></div>
                          )}
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </section>
          </div>
          
          <h1 className="detail-title">Class detail</h1>
          <div className='class-detail-info-container' style={{ backgroundColor: 'rgba(73, 160, 187, 1)', padding: '60px', maxWidth: '73%', borderRadius: '8px' }}>
          <div className='class-detail-info' style={{ display: 'flex', flexDirection: 'row', gap: '20px', overflowY: 'auto'}}>
            {/* Class Info Section */}
            <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '24px',fontWeight: '500' ,paddingBottom: '40px', color: 'rgba(255, 255, 255, 1)'}}>Class info</h2>
            <div className="class-info" >
              <p style={{ fontSize: '16px',fontWeight: '600' ,padding: '5px'}}>May 11th | 12:00-1:00 PM</p>
              <p style={{ fontSize: '16px',fontWeight: '500' ,padding: '5px'}}>Group Exercise Class</p>
              <p style={{ fontSize: '16px',fontWeight: '500' ,padding: '5px'}}>Session: 8 / 12</p>
              <p style={{ fontSize: '16px',fontWeight: '500' ,padding: '5px'}}>Participants: 10 / 15</p>
              <div className="class-info-buttons" style={{ display: 'flex', gap: '30px' }}>
                <button className="reschedule-button">Reschedule</button>
                <button className="cancel-button">Cancel class</button>
              </div>
            </div>
            </div>

            {/* Edit Notification Section */}
            <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '24px',fontWeight: '500' ,paddingBottom: '40px', color: 'rgba(255, 255, 255, 1)'}}>Edit Notification</h2>
            <div className="edit-notification" >
              <label style={{ fontSize: '14px',fontWeight: '600'}}>Class reminder</label>
              <textarea placeholder="Type here...." ></textarea>
              <button className="send-button" >Send</button>
            </div>
            </div>

            {/* Participant List Section */}
            <div style={{ flex: 2 }}>
            <h2 style={{ fontSize: '24px',fontWeight: '500' ,paddingBottom: '40px', color: 'rgba(255, 255, 255, 1)'}}>Participant list</h2>
            <div className="participant-list" style={{ flex: 2 }}>
              <div className="participant-item">
                <div className="participant-avatar"></div>
                <div className="participant-info">
                  <p className="participant-name">Richard Brown</p>
                  <p className="participant-condition">COPD</p>
                </div>
                <button className="message-button">✉️</button>
              </div>
              <div className="participant-item">
                <div className="participant-avatar"></div>
                <div className="participant-info">
                  <p className="participant-name">Tim Johnson</p>
                  <p className="participant-condition">COPD</p>
                </div>
                <button className="message-button">✉️</button>
              </div>
              <div className="participant-item">
                <div className="participant-avatar"></div>
                <div className="participant-info">
                  <p className="participant-name">Trish Lee</p>
                  <p className="participant-condition">COPD, Asthma</p>
                </div>
                <button className="message-button">✉️</button>
              </div>
              <div className="participant-item">
                <div className="participant-avatar"></div>
                <div className="participant-info">
                  <p className="participant-name">Trish Lee</p>
                  <p className="participant-condition">COPD, Asthma</p>
                </div>
                <button className="email-sign">✉️</button>
              </div>
              <div className="participant-item">
                <div className="participant-avatar"></div>
                <div className="participant-info">
                  <p className="participant-name">Trish Lee</p>
                  <p className="participant-condition">COPD, Asthma</p>
                </div>
                <button className="message-button">✉️</button>
              </div>
            </div>
            <button className="edit-participants-button" >Edit participants</button>
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
};

export default ClassSchedule;
