export const getVideoDuration = (url: string) => {
    return new Promise<number>(((resolve, reject) => {
        const audio = new Audio(url)
        audio.addEventListener('loadedmetadata', () => {
            resolve(audio.duration)
        })
        audio.addEventListener('error', (e) => {
            reject(e)
        })
    }))
}