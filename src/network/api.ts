import { GenURLResp, IAdmin, ICourse, IKnowledge, INews, IResource, IUploadInfo, IUser } from '../model'
import { del, get, post, put } from '../utils/request'


export const getCourseList = () => {
    return get<ICourse[]>('/course')
}

export const genCoursePicPutUrl = () => {
    return get<IUploadInfo>('/course/upload/pic')
}

export const genCourseVideoPutUrl = () => {
    return get<IUploadInfo>('/course/upload/video')
}

export const uploadFile = (putUrl: string, blob: any) => {
    return put(putUrl, blob)
}

export const updateCourse = (course: ICourse) => {
    return put('/course', course)
}

export const getKinList = () => {
    return get<IUser[]>('/user/kins')
}

export const markKinApproved = (kinId: number) => {
    return get<void>(`/user/${kinId}/mark-approved`)
}

export const getAdminList = () => {
    return get<IAdmin[]>('/admin')
}

export const getKinPartList = () => {
    return get<void>('/session/all')
}

export const newAttchment = (kid:string, id: string, fileName: string, url: string) => {
    return post<void>('/session/admin/new-attachment',{
        "kinesiologistId":kid,
        "participantId": id,
        "fileName": fileName,
        "url": url })
}

export const  genAttachUrl = (fileName:string) => {
    return post<GenURLResp>('/session/gen-attachment-url', {"fileName": fileName})
}

export const getPartFileList = (partId: string) => {
    return get<any>(`/session/admin/part/${partId}/attachment`)
}


export const deleteAdmin = (email: string) => {
    return post<void>('/admin/delete', { email })
}

export const addAdmin = (email: string) => {
    return post<void>('/admin/new', { email })
}


export const getResourceList = () => {
    return get<IResource[]>('/resource')
}

export const genResourcePutUrl = () => {
    return get<IUploadInfo>('/resource/upload')
}

export const newResource = (resource: IResource) => {
    return post('/resource/new', resource)
}

export const modifyResource = (resource: IResource) => {
    return post('/resource', resource)
}

export const deleteResource = (id: number) => {
    return del(`/resource/${id}`)
}

export const getKnowledgeList = () => {
    return get<IKnowledge[]>('/knowledge')
}

export const genKnowlegePutUrl = () => {
    return get<IUploadInfo>('/knowledge/upload')
}

export const newKnowledge = (resource: IKnowledge) => {
    return post('/knowledge/new', resource)
}
export const modifyKnowledge = (resource: IKnowledge) => {
    return post('/knowledge', resource)
}

export const deleteKnowledge = (id: number) => {
    return del(`/knowledge/${id}`)
}

export const getNewsList = () => {
    return get<INews[]>('/news')
}

export const genNewsPutUrl = () => {
    return get<IUploadInfo>('/news/upload')
}

export const newNews = (resource: INews) => {
    return post('/news/new', resource)
}
export const modifyNews = (resource: INews) => {
    return post('/news', resource)
}

export const deleteNews = (id: number) => {
    return del(`/news/${id}`)
}
