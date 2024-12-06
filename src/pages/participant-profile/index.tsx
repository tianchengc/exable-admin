import { FunctionComponent } from 'react';
import { UpcomingSession } from './components/upcoming-block';
import Progress from '../../components/progress';
import ProfileSummary from '../../components/profile-summary';
import ProgramInformation from '../../components/program-information';
import QuestionnaireCompletion from '../../components/questionnaire-completion';
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

      <Progress />

      <PerformanceMeasures data={performanceData} />

      <ProfileSummary />

      <ProgramInformation />

      <QuestionnaireCompletion />
    </div>
  );
};
