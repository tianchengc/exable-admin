import { FunctionComponent } from 'react';
import { UpcomingSession } from './components/upcoming-block';
import Progress from '../../components/progress';
import ProfileSummary from '../../components/profile-summary';
import ProgramInformation from '../../components/program-information';
import QuestionnaireCompletion from '../../components/questionnaire-completion';
import { PerformanceMeasure } from '../../components/performance-measure';
import Header from './components/header';

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
    <div className="flex flex-col p-5 w-screen gap-y-8 bg-background-color  overflow-scroll ">
      <Header />

      <div className="flex gap-x-5 ">
        <UpcomingSession
          sessionTitle="Session 3"
          sessionDate="July 6th"
          sessionTime="10:00"
        />

        <Progress />

        <PerformanceMeasure data={performanceData} />
      </div>

      <div className="flex gap-x-5 ">
        <div className="flex flex-col gap-4 w-[582px]">
          <ProfileSummary />

          <ProgramInformation />
        </div>

        <QuestionnaireCompletion />
      </div>
    </div>
  );
};
