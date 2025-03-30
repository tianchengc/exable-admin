import axios from 'axios';
import { User } from '../types';
import * as types from './types';
import { AppDispatch } from '../store';
import { RegistrationPayload, ApiResponse, RegisteredUser } from '../types';

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

export const registerUser = (userData: RegistrationPayload) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.post<ApiResponse<RegisteredUser>>(
        `${import.meta.env.VITE_API_BASE_URL}/user/register`,
        userData
      );
      
      if (response.data.code === 0) {
        // Registration successful
        return { success: true, data: response.data.data };
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      const errorMessage = axios.isAxiosError(error) 
        ? error.response?.data?.message || 'Registration failed'
        : 'An error occurred';
      dispatch(setError(errorMessage));
      return { success: false, error: errorMessage };
    } finally {
      dispatch(setLoading(false));
    }
  };
}; 