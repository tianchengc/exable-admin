export interface ICourse {
  id?: number
  title?: string
  htmlContent?: string
  htmlPrepare?: string
  videoLink?: string
  updateTime?: number
  quiz?: string
  titleForKin?: string
  contentForKin?: string
  htmlPreSession?: string
  htmlPartPrepare?: string
  preSessionTitleForKin?: string
  contentTitleForKin?: string
}

export interface IUploadInfo {
    url?: string
    putUrl?: string
}

export interface IKinesiologistInfo {
    userId: number;
    experiences: number;
    specialization: string;
    accreditationNumber: string;
    accreditationBody: string;
    degree: string;
    bio: string;
    offerFreeConsultation: boolean;
    approved: boolean;
}

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    province: string;
    city: string;
    birthDate: string;
    language: string;
    interests: string;
    type: string;
    qbUid: number;
    kinesiologistInfo: IKinesiologistInfo;
}


export interface ILoginVo {
    user: IUser
    token: string
}

export interface IAdmin {
    email: string;
    deletable?: boolean
}

export interface IResource {
    id?: number
    title?: string
    brief?: string
    album?: string
    content?: string
    buttonText?: string
    bindCourse?: number
}

export interface IKnowledge {
    id?: number
    title?: string
    brief?: string
    album?: string
    content?: string
    buttonText?: string
}

export interface INews {
    id?: number
    title?: string
    brief?: string
    album?: string
    content?: string
    buttonText?: string
}

export interface GenURLResp {
    url: string;
    putUrl: string;
}

export interface LeftSectionMenuItemData {
    imageSource?: string,
    title?: string,
}

export interface NumberTitleData {
    count?: number,
    title?: string,
}

export interface ClassCycle {
    title: string,
    options: Array<string>,
    selected: string,
    numberTitleData: Array<NumberTitleData>,
}
