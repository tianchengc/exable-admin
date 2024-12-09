import React from 'react';
import SignIn from './pages/sign-in';
import BaseLayout from './pages/layout';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Provider } from 'mobx-react';
import { Login } from './pages/login';
import { CourseManage } from './pages/course-manage';
import { CourseEdit } from './pages/course-edit';
import { KinAudition } from './pages/kin-audition';
import { KinList } from './pages/kin-list';
import { AdminList } from './pages/admin-list';
import { ResourceManage } from './pages/resource';
import { KnowledgeManage } from './pages/knowledge-manage';
import { NewsManage } from './pages/news-manage';
import Participants from './pages/participants';
import { Account } from './pages/account';
import { ParticipantProfilePage } from './pages/participant-profile';
import NoMatch from './pages/no-match';
import ClassSchedule from './pages/class_schedule';
import SchedulePage from './pages/schedule';
import Staff_Schedule from './pages/schedule/schedule-by-staff';
import Exercise from './pages/exercise-page/Exercise';
import { ExerciseLibraryPage } from './pages/exercise-library';
import { ReportsPage } from './pages/reports';
import { Dashboard } from './pages/dashboard';
import StaffList from './pages/staff/staffList';

export default function App() {
  return (
    <React.StrictMode>
      <GoogleOAuthProvider clientId="159397984904-j2na55s5l8emvi4mgv2lb28tmlj6mdfh.apps.googleusercontent.com">
        <Provider>
          <BrowserRouter>
            <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/" element={<BaseLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/course" element={<CourseManage />} />
                <Route
                  path="/participants/:id"
                  element={<ParticipantProfilePage />}
                />
                <Route
                  path="/exercise_library"
                  element={<ExerciseLibraryPage />}
                />
                <Route path="/course/:id" element={<CourseEdit />} />
                <Route path="/audit" element={<KinAudition />} />
                <Route path="/kin" element={<KinList />} />
                <Route path="/admin" element={<AdminList />} />
                <Route path="/resource" element={<ResourceManage />} />
                <Route path="/knowledge" element={<KnowledgeManage />} />
                <Route path="/news" element={<NewsManage />} />
                <Route path="/participants" element={<Participants />} />
                <Route path="/account" element={<Account />} />
                <Route path="/staff" element={<StaffList />} />
                <Route path="/class_schedule" element={<ClassSchedule />} />
                <Route path="/schedule" element={<SchedulePage />} />
                <Route path="/reports" element={<ReportsPage />} />
                <Route path="/staff_schedule" element={<Staff_Schedule />} />
                <Route path="/exercise-library" element={<Exercise />} />
                <Route
                  path="/participants/:id"
                  element={<ParticipantProfilePage />}
                />
                <Route path="*" element={<NoMatch />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </GoogleOAuthProvider>
    </React.StrictMode>
  );
}
