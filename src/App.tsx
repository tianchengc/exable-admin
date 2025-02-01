import React from 'react';
import SignIn from './pages/sign-in/signin';
import BaseLayout from './pages/layout';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Provider } from 'mobx-react';
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
import { ExerciseLibraryPage } from './pages/exercise-library';
import Register from './pages/register/register';
import { ReportsPage } from './pages/reports';
import { Dashboard } from './pages/dashboard';
import StaffList from './pages/staff/staffList';
import TestPage from './pages/class-details/TestPage';

export default function App() {
  return (
    <React.StrictMode>
      <GoogleOAuthProvider clientId="159397984904-j2na55s5l8emvi4mgv2lb28tmlj6mdfh.apps.googleusercontent.com">
        <Provider>
          <BrowserRouter>
            <Routes>
              <Route path="login" element={<SignIn />} />
              <Route path="register" element={<Register />} />
              
              <Route path="/" element={<BaseLayout />}>
                <Route index element={<Dashboard />} />
                
                {/* Course management */}
                <Route path="courses">
                  <Route index element={<CourseManage />} />
                  <Route path=":id" element={<CourseEdit />} />
                </Route>
                
                {/* Participant routes */}
                <Route path="participants">
                  <Route index element={<Participants />} />
                  <Route path=":id" element={<ParticipantProfilePage />} />
                </Route>
                
                {/* Schedule related */}
                <Route path="schedule" element={<SchedulePage />} />
                <Route path="class_schedule" element={<ClassSchedule />} />
                <Route path="staff_schedule" element={<Staff_Schedule />} />
                
                {/* Other main routes */}
                <Route path="exercises" element={<ExerciseLibraryPage />} />
                <Route path="audit" element={<KinAudition />} />
                <Route path="kin" element={<KinList />} />
                <Route path="admin" element={<AdminList />} />
                <Route path="resource" element={<ResourceManage />} />
                <Route path="knowledge" element={<KnowledgeManage />} />
                <Route path="news" element={<NewsManage />} />
                <Route path="account" element={<Account />} />
                <Route path="staff" element={<StaffList />} />
                <Route path="reports" element={<ReportsPage />} />
                <Route path="test" element={<TestPage />} />
                
                {/* 404 catch-all route */}
                <Route path="*" element={<NoMatch />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </GoogleOAuthProvider>
    </React.StrictMode>
  );
}
