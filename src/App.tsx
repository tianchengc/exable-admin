import React from 'react';
import BaseLayout from './pages/layout';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Link, Route, Routes } from 'react-router';
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
import { ParticipantProfilePage } from './pages/participant-profile';

export default function App() {
  return (
    <React.StrictMode>
      <GoogleOAuthProvider clientId="159397984904-j2na55s5l8emvi4mgv2lb28tmlj6mdfh.apps.googleusercontent.com">
        <Provider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<BaseLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/course" element={<CourseManage />} />
                <Route path="/participants" element={<ParticipantProfilePage />} />
                <Route path="/course/:id" element={<CourseEdit />} />
                <Route path="/audit" element={<KinAudition />} />
                <Route path="/kin" element={<KinList />} />
                <Route path="/admin" element={<AdminList />} />
                <Route path="/resource" element={<ResourceManage />} />
                <Route path="/knowledge" element={<KnowledgeManage />} />
                <Route path="/news" element={<NewsManage />} />
              </Route>
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </BrowserRouter>
          ;
        </Provider>
      </GoogleOAuthProvider>
    </React.StrictMode>
  );
}

// TODO
function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
