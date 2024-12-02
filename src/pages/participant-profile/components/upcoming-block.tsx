import { FunctionComponent } from 'react';
import "../style.css";
export const UpcomingSession: FunctionComponent<{
  sessionTitle: string;
  sessionDate: string;
  sessionTime: string;
}> = ({ sessionTitle, sessionDate, sessionTime }) => {
  return (
    <div className="upcoming-session bg-blue-400 p-7 pt-2">
      <h3 className="text-lg">Upcoming</h3>
      <p className="text-sm">{sessionTitle}</p>
      <div className="upcoming-date p-5 my-2 mx-3">
        <p >{sessionDate}</p>
        <p >{sessionTime}</p>
      </div>
      <button className="past-appt-btn bg-blue-200 text-blue-900 py-1 px-3 rounded hover:bg-blue-100">
        View past appointments
      </button>
    </div>
  );
};
