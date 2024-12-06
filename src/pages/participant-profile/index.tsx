import { FunctionComponent } from 'react';
import { UpcomingSession } from './components/upcoming-block';

export const ParticipantProfilePage: FunctionComponent = () => {
  return (
    <div className="session-preview">
      <UpcomingSession
        sessionTitle="Session 3"
        sessionDate="July 6th"
        sessionTime="10:00"
      />
    </div>
  );
};
