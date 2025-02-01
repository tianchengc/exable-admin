import { User } from '../types';
import * as types from './types';

export const setUser = (user: User) => ({
  type: types.SET_USER,
  payload: user,
});

export const logout = () => ({
  type: types.LOGOUT,
});

export const setLoading = (loading: boolean) => ({
  type: types.SET_USER_LOADING,
  payload: loading,
});

export const setError = (error: string | null) => ({
  type: types.SET_USER_ERROR,
  payload: error,
});

export const loginUser = (credentials: { email: string; password: string }) => {
  return async (dispatch: any) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      dispatch(setUser(data));
    } catch (error) {
      dispatch(setError(error instanceof Error ? error.message : 'An error occurred'));
    } finally {
      dispatch(setLoading(false));
    }
  };
}; 