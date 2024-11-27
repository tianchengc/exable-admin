import { useCallback, useState } from 'react'

export const useFormOperation = <T>() => {
    const [ currentFormVal, setCurrentFormVal ] = useState<T | null>(null)
    const [ visible, setVisible ] = useState(false)

    const openForm = useCallback((openVal: T | null) => {
        setVisible(true)
        setCurrentFormVal(openVal)
    }, [])

    const closeForm = useCallback(() => {
        setVisible(false)
    }, [])

    return [
        visible,
        currentFormVal,
        openForm,
        closeForm,
    ] as [boolean, T | null, (openVal: T | null) => void, () => void]
}