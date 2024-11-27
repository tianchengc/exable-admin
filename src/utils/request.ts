import { AxiosRequestConfig } from 'axios'
import http, { NetworkError } from '../network'
import { tryCatch } from './try-catch'

/**
 * 经过 tryCatch 封装的ger方法
 * @param {string} url 请求路径
 * @param {AxiosRequestConfig} config axios 原始配置
 * @return {[T, NetworkError]} 返回一个元组，第一个为请求的结果，第二个为错误对象
 * ```
 * const [res, err] = await get('/', { a: 1 })
 * if (err) { return console.error(err) }
 * // 安全的访问 res
 * console.log(res.code)  // 0
 * ```
 */
export function get<T = any> (url: string, data: any = {}, config?: AxiosRequestConfig) {
    return tryCatch<T, NetworkError>(http.get(url, { ...config, params: data }).then(res => res.data))
}

/**
 * 经过 tryCatch 封装的post方法
 * @param {string} url 请求路径
 * @param {any} data 请求的数据
 * @param {AxiosRequestConfig} config axios 原始配置
 * @return {[T, NetworkError]} 返回一个元组，第一个为请求的结果，第二个为错误对象
 * ```
 * const [res, err] = await post('/', { a: 1 })
 * if (err) { return console.error(err) }
 * // 安全的访问 res
 * console.log(res.code)  // 0
 * ```
 */
export function post<T = any, D = any> (url: string, data?: D, config?: AxiosRequestConfig) {
    return tryCatch<T, NetworkError>(http.post(url, data, config).then(res => res.data))
}


/**
 * 经过 tryCatch 封装的方法
 * @param {string} url 请求路径
 * @param {any} data 请求的数据
 * @param {AxiosRequestConfig} config axios 原始配置
 * @return {[T, CommonError]} 返回一个元组，第一个为请求的结果，第二个为错误对象
 * ```
 * const [res, err] = await put('/', { a: 1 })
 * if (err) { return console.error(err) }
 * // 安全的访问 res
 * console.log(res.code)  // 0
 * ```
 */
export function put<T = any, D = any> (url: string, data?: D, config?: AxiosRequestConfig) {
    return tryCatch<T, NetworkError>(http.put(url, data, config).then(res => res.data))
}

/**
 * 经过 tryCatch 封装的方法
 * @param {string} url 请求路径
 * @param {AxiosRequestConfig} config axios 原始配置
 * @return {[T, CommonError]} 返回一个元组，第一个为请求的结果，第二个为错误对象
 * ```
 * const [res, err] = await del('/', { params: { a: 1 } })
 * if (err) { return console.error(err) }
 * // 安全的访问 res
 * console.log(res.code)  // 0
 * ```
 */
export function del<T = any> (url: string, config?: AxiosRequestConfig) {
    return tryCatch<T, NetworkError>(http.delete(url, config).then(res => res.data))
}