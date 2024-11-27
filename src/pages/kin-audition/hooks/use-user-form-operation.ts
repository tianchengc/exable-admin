import { useCallback, useState } from 'react'
import { IUser } from '../../../model'

export const useUserFormOperation = () => {
    const [ currentUser, setCurrentUser ] = useState<IUser | null>(null)
    const [ isUserFormModalVisible, setIsUserFormModalVisible ] = useState(false)

    const openForm = (user: IUser | null) => {
        setIsUserFormModalVisible(true)
        setCurrentUser(user)
    }

    const closeForm = useCallback(() => {
        setIsUserFormModalVisible(false)
    }, [])

    return {
        openForm,
        closeForm,
        currentUser,
        isUserFormModalVisible,
    }
}