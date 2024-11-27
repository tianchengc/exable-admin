/**
 * tryCatch return Promise<[T, Error]>
 * @param {Promise<T>} promise
 */
export async function tryCatch<T, E = Error> (promise: Promise<T> | T): Promise<[T, null] | [null, E]> {
    try {
        const ret = await promise
        return [ret, null]
    } catch (e) {
        return [null, e as E]
    }
}
