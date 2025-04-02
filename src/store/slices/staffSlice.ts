import { createSlice } from '@reduxjs/toolkit';

interface Staff {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
}

interface StaffState {
  staffList: Staff[];
  loading: boolean;
  error: string | null;
}

const initialState: StaffState = {
  staffList: [],
  loading: false,
  error: null,
};

const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Add async action handlers here
  },
});

export const { clearError } = staffSlice.actions;
export default staffSlice.reducer;
export type { StaffState };