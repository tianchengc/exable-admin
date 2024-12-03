import { FunctionComponent } from 'react';
import { UpcomingSession } from './components/upcoming-block';
import { PerformanceMeasures } from './components/performance-measures-block';

export const ParticipantProfilePage: FunctionComponent = () => {
  const performanceData = {
    pre: {
      sitToStand: 10,
      armCurl: 13,
      caat: 30,
      mmrc: 1,
    },
    post: {
      sitToStand: 15,
      armCurl: 20,
      caat: 20,
      mmrc: 1,
    },
  };

  return (
    <div className="session-preview">
      <UpcomingSession
        sessionTitle="Session 3"
        sessionDate="July 6th"
        sessionTime="10:00"
      />
      <PerformanceMeasures data={performanceData} />
    </div>
  );
};
