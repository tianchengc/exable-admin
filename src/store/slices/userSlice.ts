import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserState, RegisteredUser, ApiResponse, RegistrationPayload } from '../types';

const initialState: UserState = {
  currentUser: null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  'user/login',
  (credentials: { email: string; password: string; type: string }, { rejectWithValue }) => {
    return axios.post<ApiResponse<RegisteredUser>>(
      `${import.meta.env.VITE_API_BASE_URL}/user/login`,
      credentials
    )
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || 'Login failed');
      }
      return rejectWithValue('An error occurred');
    });
  }
);

export const registerUser = createAsyncThunk(
  'user/register',
  (userData: RegistrationPayload, { rejectWithValue }) => {
    return axios.post<ApiResponse<RegisteredUser>>(
      `${import.meta.env.VITE_API_BASE_URL}/user/register`,
      userData
    )
    .then((response) => {
      if (response.status === 200 && response.data.code === 0) {
        return response.data.data;
      } else if (response.data.code === -501) {
        return rejectWithValue('Email already in use. Please sign in.');
      } else {
        return rejectWithValue(response.data.message);
      }
    })
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || 'Registration failed');
      }
      return rejectWithValue('An error occurred');
    });
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.currentUser = null;
      state.error = null;
      document.cookie = 'Authorization=; Max-Age=0'; // Clear the Authorization cookie
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<RegisteredUser>) => {
        state.loading = false;
        state.currentUser = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(registerUser.pending, (state) => {
        state.currentUser = null;
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<RegisteredUser>) => {
        state.loading = false;
        state.currentUser = action.payload;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const selectCurrentUser = (state: { user: UserState }) => state.user.currentUser;
export const selectLoading = (state: { user: UserState }) => state.user.loading;
export const selectError = (state: { user: UserState }) => state.user.error;
export const selectIsLoggedIn = (state: { user: UserState }) => !!state.user.currentUser;
export const selectUserId = (state: { user: UserState }) => state.user.currentUser?.id;
export const selectUserFirstName = (state: { user: UserState }) => state.user.currentUser?.firstName;
export const selectUserLastName = (state: { user: UserState }) => state.user.currentUser?.lastName;
export const selectUserEmail = (state: { user: UserState }) => state.user.currentUser?.email;
export const selectUserPhoneNumber = (state: { user: UserState }) => state.user.currentUser?.phoneNumber;
export const selectUserType = (state: { user: UserState }) => state.user.currentUser?.type;

export const { logout, clearError } = userSlice.actions;
export default userSlice.reducer;
export type { UserState };