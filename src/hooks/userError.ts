
import { useEffect } from 'react'
import { message } from 'antd'
import { NetworkError } from '../network'

export function useShowError (msg: string, error: NetworkError | null) {
    useEffect(() => {
        if (error) {
            return message.error(`${msg}(${error.serverMessage})`)
        }
    }, [msg, error])
}
