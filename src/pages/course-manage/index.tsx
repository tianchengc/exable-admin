import { FunctionComponent } from 'react'
import { Page } from '../../components/Page'
import { useGetCourseList } from '../../hooks/use-get-course-list'

import './style.css'
import { useNavigate } from 'react-router'

export const CourseManage: FunctionComponent<{}> = () => {
    const { loading } = useGetCourseList()
    const navigate = useNavigate()

    return <Page title={'Course Manage'} loading={loading}>
        <div id='course-container'>
            {[...Array(12)].map((v, k) => <>
                <div className='course-block' key={k} onClick={() => navigate(`/course/${k + 1}`)}><span>{k + 1}</span></div>
            </>)}
        </div>
    </Page>
}
