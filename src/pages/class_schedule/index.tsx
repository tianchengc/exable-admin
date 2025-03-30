import React, { useRef } from 'react';
import './style.css';

const ClassSchedule: React.FC = () => {
  const scheduleGridRef = useRef<HTMLDivElement | null>(null);

  const scrollRight = () => {
    if (scheduleGridRef.current) {
      scheduleGridRef.current.scrollBy({ left: 600, behavior: 'smooth' });
    }
  };

  return (
    <div className="class-schedule-page_c" style={{ overflowX: 'auto', width: '100%' }}>
      {/* Main Content */}
      <main className="schedule-content-1_c" >
        {/* Left Section */}
        <div className="schedule-left_c">
          <h1 className="schedule-title_c">Schedule of All Classes</h1>

          {/* New Container for Add Button and Weekly Schedule */}
          <div className="button-and-grid_c" style={{ overflowY: 'visible', height: 'auto' }}>
            <div style={{ textAlign: 'right', marginBottom: '20px' }}>
              <button className="add-class-button_c">+ Add a new class</button>
            </div>
            <div style={{ textAlign: 'right', marginBottom: '20px' }}>
              <button className="scroll-right-button_c" onClick={scrollRight} style={{ marginLeft: '10px', width: '10px', height: '10px', color: 'red', fontSize: '30px'}}>&gt;</button>
            </div>

            {/* Weekly Schedule */}
            <section className="weekly-schedule_c">
              <div className="schedule-grid_c" ref={scheduleGridRef}>
                {/* Weekdays Header */}
                <div className="schedule-grid-header_c">
                  <div className="time-label_c"></div>
                  <div className="weekday_c">Monday</div>
                  <div className="weekday_c">Tuesday</div>
                  <div className="weekday_c">Wednesday</div>
                  <div className="weekday_c">Thursday</div>
                  <div className="weekday_c">Friday</div>
               {/*    <div className="weekday">Saturday</div>
                  <div className="weekday">Sunday</div> */}
                </div>

                {/* Schedule Grid */}
                <div className="schedule-grid-body_c">
                  {/* Time Slots and Classes */}
                  {["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"].map((time, timeIdx) => (
                    <React.Fragment key={timeIdx}>
                      <div className="time-slot_c">{time}</div>
                      {[...Array(5)].map((_, dayIdx) => (
                        <div key={dayIdx} className="class-cell_c">
                          {/* Example Class Card - Replace with dynamic data */}
                          {(time === '11:00 AM' && dayIdx === 0) || (time === '1:00 PM' && dayIdx === 3) ? (
                            <div className="class-card_c">
                              <div className="class-name_c">Group Exercise 2</div>
                              <div className="session-participants-wrapper_c">
                                <div className="session-info_c">Session 8/20</div>
                                <div className="participants-info_c">
                                  <div className="participants-text_c">👥 10/15</div>
                                </div>
                              </div>
                              <button className="view-button-1_c">View</button>
                            </div>
                          ) : (
                            <div className="empty-cell_c"></div>
                          )}
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </section>
          </div>
          
          <h1 className="detail-title_c">Class detail</h1>
          <div className='class-detail-info-container_c' style={{ backgroundColor: 'rgba(73, 160, 187, 1)', padding: '60px', maxWidth: '73%', borderRadius: '8px' }}>
          <div className='class-detail-info_c' style={{ display: 'flex', flexDirection: 'row', gap: '20px', overflowY: 'auto'}}>
            {/* Class Info Section */}
            <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '24px',fontWeight: '500' ,paddingBottom: '40px', color: 'rgba(255, 255, 255, 1)'}}>Class info</h2>
            <div className="class-info_c" >
              <p style={{ fontSize: '16px',fontWeight: '600' ,padding: '5px'}}>May 11th | 12:00-1:00 PM</p>
              <p style={{ fontSize: '16px',fontWeight: '500' ,padding: '5px'}}>Group Exercise Class</p>
              <p style={{ fontSize: '16px',fontWeight: '500' ,padding: '5px'}}>Session: 8 / 12</p>
              <p style={{ fontSize: '16px',fontWeight: '500' ,padding: '5px'}}>Participants: 10 / 15</p>
              <div className="class-info-buttons_c" style={{ display: 'flex', gap: '30px' }}>
                <button className="reschedule-button_c">Reschedule</button>
                <button className="cancel-button_c">Cancel class</button>
              </div>
            </div>
            </div>

            {/* Edit Notification Section */}
            <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '24px',fontWeight: '500' ,paddingBottom: '40px', color: 'rgba(255, 255, 255, 1)'}}>Edit Notification</h2>
            <div className="edit-notification_c" >
              <label style={{ fontSize: '14px',fontWeight: '600'}}>Class reminder</label>
              <textarea placeholder="Type here...." ></textarea>
              <button className="send-button_c" >Send</button>
            </div>
            </div>

            {/* Participant List Section */}
            <div style={{ flex: 2 }}>
            <h2 style={{ fontSize: '24px',fontWeight: '500' ,paddingBottom: '40px', color: 'rgba(255, 255, 255, 1)'}}>Participant list</h2>
            <div className="participant-list_c" style={{ flex: 2 }}>
              <div className="participant-item_c">
                <div className="participant-avatar_c"></div>
                <div className="participant-info_c">
                  <p className="participant-name_c">Richard Brown</p>
                  <p className="participant-condition_c">COPD</p>
                </div>
                <button className="message-button_c">✉️</button>
              </div>
              <div className="participant-item_c">
                <div className="participant-avatar_c"></div>
                <div className="participant-info_c">
                  <p className="participant-name_c">Tim Johnson</p>
                  <p className="participant-condition_c">COPD</p>
                </div>
                <button className="message-button_c">✉️</button>
              </div>
              <div className="participant-item_c">
                <div className="participant-avatar_c"></div>
                <div className="participant-info_c">
                  <p className="participant-name_c">Trish Lee</p>
                  <p className="participant-condition_c">COPD, Asthma</p>
                </div>
                <button className="message-button_c">✉️</button>
              </div>
              <div className="participant-item_c">
                <div className="participant-avatar_c"></div>
                <div className="participant-info_c">
                  <p className="participant-name_c">Trish Lee</p>
                  <p className="participant-condition_c">COPD, Asthma</p>
                </div>
                <button className="email-sign_c">✉️</button>
              </div>
              <div className="participant-item_c">
                <div className="participant-avatar_c"></div>
                <div className="participant-info_c">
                  <p className="participant-name_c">Trish Lee</p>
                  <p className="participant-condition_c">COPD, Asthma</p>
                </div>
                <button className="message-button_c">✉️</button>
              </div>
            </div>
            <button className="edit-participants-button_c" >Edit participants</button>
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
};

export default ClassSchedule;
