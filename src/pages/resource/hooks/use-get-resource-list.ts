import { useMemo } from 'react'
import { useShowError } from '../../../hooks/userError'
import { useService } from '../../../hooks/useService'
import { getResourceList } from '../../../network/api'

/**
 * 拉取用户列表
 */
export const useGetResourceList = () => {
    const [loading, resourceList, err, refreshResourceList] = useService(getResourceList)
    useShowError('Failed to fetch resource list', err)

    return {
        loading,
        resourceList,
        refreshResourceList
    }
}