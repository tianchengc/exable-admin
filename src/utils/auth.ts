import * as cookie from 'cookie'

const KEY = 'Authorization'
export function hasAuth() {
    const c = cookie.parse(document.cookie)
    return c[KEY] !== undefined
}

export function removeAuth() {
    document.cookie = cookie.serialize(KEY, '', {
        expires: new Date(1)
    })
}