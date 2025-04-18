import axios from 'axios'
import * as auth from '../utils/auth'
const apiClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
    withCredentials: true,
    responseType: 'json',
    transformRequest: (data, headers) => {
        headers['Content-Type'] = 'application/json'
        return JSON.stringify(data)
    },
    transformResponse: (data) => {
        data = JSON.parse(data)
        if (data.code !== 0) {
            if (data.code === -401 || data.code === -403) {
                auth.removeAuth()
                global.location.reload()

                throw new NetworkError(data.code as number, data.message as string, data.traceId as string)
            }
            throw new NetworkError(data.code as number, data.message as string, data.traceId as string)
        }
        return data
    },
})

export default apiClient

export class NetworkError extends Error {
    code?: number
    serverMessage?: string
    traceId?: string

    constructor(code: number, serverMessage: string, traceId: string) {
        super()
        this.code = code
        this.serverMessage = serverMessage
        this.traceId = traceId
    }
}
