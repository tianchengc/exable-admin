import axios from 'axios';
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

export const loginUser = (credentials: { email: string; password: string; type: string }) => {
  return async (dispatch: any) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/user/login`,
        credentials
      );
      
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      dispatch(setUser(user));
      return { success: true };
    } catch (error) {
      const errorMessage = axios.isAxiosError(error) 
        ? error.response?.data?.message || 'Login failed'
        : 'An error occurred';
      dispatch(setError(errorMessage));
      return { success: false, error: errorMessage };
    } finally {
      dispatch(setLoading(false));
    }
  };
}; 