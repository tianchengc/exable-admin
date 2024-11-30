import { createContext } from 'react';
import { makeAutoObservable } from 'mobx';
import req from '../network';
import { ILoginVo, IUser } from '../model';
import * as auth from '../utils/auth';

export class UserStore {
  private mUser?: IUser = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  get user() {
    return this.mUser;
  }

  public get loggedIn() {
    console.log('get loggedIn');
    return auth.hasAuth();
  }

  login = (credential: string) => {
    return req
      .post<ILoginVo>('/user/google-auth', { credential })
      .then(resp => {
        this.mUser = resp.data.user;
      });
  };

  clearToken = () => {
    console.log('remove token');
    auth.removeAuth();
  };
}

export default createContext(new UserStore());
