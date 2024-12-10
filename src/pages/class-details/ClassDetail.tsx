import React, { useState } from 'react';
import './ClassDetail.css';

interface ClassInfo {
  date: string;
  time: string;
  title: string;
  session: string;
  participants: string;
}

interface Participant {
  name: string;
  conditions: string[];
}

interface ClassDetailProps {
  classInfo: ClassInfo;
  participants: Participant[];
  onReschedule: () => void;
  onCancel: () => void;
  onSendMessage: (message: string) => void;
}

const ClassDetail: React.FC<ClassDetailProps> = ({
  classInfo,
  participants,
  onReschedule,
  onCancel,
  onSendMessage,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [message, setMessage] = useState('');

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage(''); // Clear the input field
    }
  };

  return (
    <div className="class-detail-container">
      <button className="view-button" onClick={toggleDetails}>
        {showDetails ? 'Hide' : 'View'}
      </button>

      {showDetails && (
        <div className="detail-panel">
          {/* Class Information Section */}
          <div className="big-class-info">
            <h1>Class Info</h1>
            <div className="class-info">
              <p>{`${classInfo.date} | ${classInfo.time}`}</p>
              <p>{classInfo.title}</p>
              <p>Session: {classInfo.session}</p>
              <p>Participants: {classInfo.participants}</p>
            </div>
            <div className="class-buttons">
              <button onClick={onReschedule}>Reschedule</button>
              <button onClick={onCancel}>Cancel</button>
            </div>
          </div>

          {/* Edit Notification Section */}
          <div className="big-edit-notification">
            <h1>Edit Notification</h1>
            <div className="edit-notification">
              <textarea
                placeholder="Class notification message"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </div>
            <button onClick={handleSendMessage}>Send</button>
          </div>

          {/* Participant List Section */}
          <div className="big-participant-list">
            <h1>Participant List</h1>
            <div className="participant-list">
              <ul>
                {participants.map((participant, index) => (
                  <li key={index}>
                    <div>
                      <span>{participant.name}</span>
                      <span className="conditions">
                        {participant.conditions.join(', ')}
                      </span>
                    </div>
                    <button className="email-button">📧</button>
                  </li>
                ))}
              </ul>
            </div>
            <button className="edit-participants">Edit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassDetail;
