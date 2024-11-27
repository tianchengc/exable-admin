import { useState, useEffect } from 'react'
import { NetworkError } from '../network'

/**
  * 将普通的 Service Function 转换成 hook
  * @param {Service}  service 请求方法
  * @param {...any[]} data    该 service 方法所需要的参数
  */
export function useService<T extends any, D extends any[]> (
    service: ((...data: D) => Promise<[T, NetworkError | null]>) | null,
    ...data: D
): [ boolean, T, NetworkError | null, () => void ] {
    const [flag, setFlag] = useState(0)
    const [loading, setLoading] = useState(true)
    const [res, setRes] = useState([null, null] as unknown as [T, NetworkError | null])

    useEffect(() => {
        if (service === null) {
            return
        }
        setLoading(true)
        ;(async () => {
            // 请求
            const res = await service(...data)
            setRes(res)
            setLoading(false)
        })()
    }, [...data, flag]) // 监听 data 变化，重新执行 effect

    // 某些时候，我们需要在数据不变更的情况下手动去触发请求
    // 可以调用该方法
    const forceRequest = () => setFlag(f => f + 1)
    // 当接口成功时 res[0]为数据 res[1]为null
    return [loading, res[0], res[1], forceRequest]
}
