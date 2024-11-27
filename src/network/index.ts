import axios from 'axios'
import * as auth from '../utils/auth'
const instance = axios.create({
    baseURL: '/api',
    responseType: 'json',
    transformRequest: (data, headers) => {
        headers['Content-Type'] = 'application/json'
        return JSON.stringify(data)
    },
    transformResponse: (data) => {
        if (data.code !== 0) {
            if (data.code === -401 || data.code === -403) {
                auth.removeAuth()
                global.location.reload()

                throw new NetworkError(data.code as number, data.message as string, data.traceId as string)
            }
            throw new NetworkError(data.code as number, data.message as string, data.traceId as string)
        }
        return data.data
    },
})


export default instance

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
