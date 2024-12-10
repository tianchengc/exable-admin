import React from 'react';
import ClassDetail from './ClassDetail';
import './TestPage.css';

const TestPage: React.FC = () => {
  // Simulate the class information
  const classInfo = {
    date: 'May 11th',
    time: '12:00-1:00 PM',
    title: 'Group Exercise Class',
    session: '8 / 12',
    participants: '10 / 15',
  };

  // Simulate the list of participants
  const participants = [
    { name: 'Richard Brown', conditions: ['COPD'] },
    { name: 'Tim Johnson', conditions: ['COPD'] },
    { name: 'Trish Lee', conditions: ['COPD', 'Asthma'] },
    { name: 'James Bound', conditions: ['Asthma'] },
  ];

  // Reschedule Button
  const handleReschedule = () => {
    alert('Reschedule functionality triggered!');
  };

  //Cancel Button
  const handleCancel = () => {
    alert('Cancel functionality triggered!');
  };

  //Send Button
  const handleSendMessage = (message: string) => {
    alert(`Message sent to backend: "${message}"`);
  };

  return (
    <div className="another-page-container">
      <h1>View Button Test Page</h1>
      <ClassDetail
        classInfo={classInfo}
        participants={participants}
        onReschedule={handleReschedule}
        onCancel={handleCancel}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default TestPage;
