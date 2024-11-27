export const convertSecondToMinutesAndSecond = (seconds = 0) => {
    const minute = Math.floor(seconds / 60)
    const second = seconds - minute * 60
    return `${minute}:${second}`
}