import { FunctionComponent } from 'react'
import { Page } from '../../components/page'
import { ICourse } from '../../model'
import { useGetCourseList } from '../../hooks/use-get-course-list'
import history from '../../stores/history'

import './style.scss'

export const CourseManage: FunctionComponent<{}> = () => {
    const { loading, courseList, } = useGetCourseList()

    return <Page title={'Course Manage'} loading={loading}>
        <div id='course-container'>
            {[...Array(12)].map((v, k) => <>
                <div className='course-block' key={k} onClick={() => history.push(`/course/${k + 1}`)}><span>{k + 1}</span></div>
            </>)}
        </div>
    </Page>
}
