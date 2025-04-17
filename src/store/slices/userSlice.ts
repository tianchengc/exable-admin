import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import apiClient from '../../network';
import { UserState, RegisteredUser, ApiResponse, RegistrationPayload, UserProfile } from '../types';
import { message } from 'antd';

const initialState: UserState = {
  currentUser: null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  'user/login',
  (credentials: { email: string; password: string; type: string }, { rejectWithValue }) => {
    return apiClient.post<ApiResponse<RegisteredUser>>(
      '/user/login',
      credentials
    )
    .then((response) => {
      message.success('Login successful');
      return response.data.data;
    })
    .catch((error) => {
      if (error instanceof Error && 'serverMessage' in error) {
        message.error('Login failed');
        return rejectWithValue(error.serverMessage || 'Login failed');
      }
      return rejectWithValue('An error occurred');
    });
  }
);

export const registerUser = createAsyncThunk(
  'user/register',
  (userData: RegistrationPayload, { rejectWithValue }) => {
    return apiClient.post<ApiResponse<RegisteredUser>>(
      '/user/register',
      userData
    )
    .then((response) => {
      message.success('Registration successful');
      return response.data.data;
    })
    .catch((error) => {
      if (error instanceof Error && 'serverMessage' in error) {
        message.error('Registration failed');
        return rejectWithValue(error.serverMessage || 'Registration failed');
      }
      return rejectWithValue('An error occurred');
    });
  }
);

export const getCurrentUser = createAsyncThunk(
  'user/me',
  (_, { rejectWithValue }) => {
    return apiClient.get<ApiResponse<UserProfile>>('/user/me')
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      if (error instanceof Error && 'serverMessage' in error) {
        message.error('Failed to fetch user data');
        return rejectWithValue(error.serverMessage || 'Failed to fetch user data');
      }
      return rejectWithValue('An error occurred');
    });
  }
);

export const updateUser = createAsyncThunk(
  'user/modify',
  (user: UserProfile, { rejectWithValue }) => {
    return apiClient.post<ApiResponse<any>>('/user/modify', user)
    .then((response) => {
      if (response.data.code !== 0) {
        return rejectWithValue(response.data.message || 'Failed to update user data');
      }
      message.success('User updated successfully');
      return user;
    })
    .catch((error) => {
      if (error instanceof Error && 'serverMessage' in error) {
        message.error('Failed to update user data');
        return rejectWithValue(error.serverMessage || 'Failed to update user data');
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
      
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, action: PayloadAction<UserProfile>) => {
        state.loading = false;
        state.currentUser = action.payload;
        state.error = null;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<UserProfile>) => {
        state.loading = false;
        state.currentUser = action.payload;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, action) => {
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