import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'mobx-react'
import { Route, Router, Switch } from 'react-router'
import { Login } from './pages/login'
import history from './stores/history'
import { Menus } from './components/menu'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { CourseManage } from './pages/course-manage'
import { CourseEdit } from './pages/course-edit'
import { KinAudition } from './pages/kin-audition'
import { AdminList } from './pages/admin-list'
import { ResourceManage } from './pages/resource'
import { KnowledgeManage } from './pages/knowledge-manage'
import { NewsManage } from './pages/news-manage'
import { KinList } from './pages/kin-list'
import Header from './components/header/header'
import Footer from './components/footer'
import './theme.css'


ReactDOM.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId='159397984904-j2na55s5l8emvi4mgv2lb28tmlj6mdfh.apps.googleusercontent.com'>
            <Provider>
                <Router history={history}>
                    <Header />
                    <Menus />
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/course" component={CourseManage} exact={true}/>
                        <Route path="/course/:id" component={CourseEdit} />
                        <Route path="/audit" component={KinAudition}/>
                        <Route path="/kin" component={KinList}/>
                        <Route path="/admin" component={AdminList}/>
                        <Route path="/resource" component={ResourceManage} />
                        <Route path="/knowledge" component={KnowledgeManage} />
                        <Route path="/news" component={NewsManage} />
                    </Switch>
                    <Footer />
                </Router>
            </Provider>
        </GoogleOAuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
