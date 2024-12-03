import { FunctionComponent } from 'react';
import "../style.css";
export const UpcomingSession: FunctionComponent<{
  sessionTitle: string;
  sessionDate: string;
  sessionTime: string;
}> = ({ sessionTitle, sessionDate, sessionTime }) => {
  return (
    // Main container
    <div className="upcoming-session p-7 pt-2">
      <h3 className="text-lg">Upcoming</h3>
      <p className="text-sm text-center">{sessionTitle}</p>
      <div className="upcoming-date p-5 my-2 mx-3">
        <p >{sessionDate}</p>
        <p >{sessionTime}</p>
      </div>
    // Button to view past appointments - Still missing the hover effect
      <button className="past-appt-btn py-1 px-3">
        View past appointments
      </button>
    </div>
  );
};
