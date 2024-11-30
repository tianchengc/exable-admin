import { useShowError } from './userError'
import { useService } from './useService'
import { getCourseList } from '../network/api'

/**
 * 拉取用户列表
 */
export const useGetCourseList = () => {
    const [loading, courseList, err, refreshCourseList] = useService(getCourseList)
    useShowError('Failed to fetch course list', err)

    return {
        loading,
        courseList,
        refreshCourseList
    }
}