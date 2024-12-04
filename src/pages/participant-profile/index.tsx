import { FunctionComponent } from 'react';
import { UpcomingSession } from './components/upcoming-block';
import Progress from '../../components/progress';
import PerformanceMeasure from '../../components/performance-measure';
import ProfileSummary from '../../components/profile-summary';
import ProgramInformation from '../../components/program-information';
import QuestionnaireCompletion from '../../components/questionnaire-completion';

export const ParticipantProfilePage: FunctionComponent = () => {
  return (
    <div className="session-preview">
      <UpcomingSession
        sessionTitle="Session 3"
        sessionDate="July 6th"
        sessionTime="10:00"
      />

      <Progress />

      <PerformanceMeasure />

      <ProfileSummary />

      <ProgramInformation />

      <QuestionnaireCompletion />
    </div>
  );
};
