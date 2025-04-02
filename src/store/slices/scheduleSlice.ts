import { createSlice } from '@reduxjs/toolkit';

interface Schedule {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  participantIds: string[];
  staffIds: string[];
  status: 'scheduled' | 'completed' | 'cancelled';
}

interface ScheduleState {
  schedules: Schedule[];
  loading: boolean;
  error: string | null;
}

const initialState: ScheduleState = {
  schedules: [],
  loading: false,
  error: null,
};

const scheduleSlice = createSlice({
  name: 'schedules',
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

export const { clearError } = scheduleSlice.actions;
export default scheduleSlice.reducer;
export type { ScheduleState };