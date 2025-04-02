import { createSlice } from '@reduxjs/toolkit';

interface Participant {
  id: string;
  name: string;
  email: string;
  status: string;
}

interface ParticipantState {
  participants: Participant[];
  loading: boolean;
  error: string | null;
}

const initialState: ParticipantState = {
  participants: [],
  loading: false,
  error: null,
};

const participantSlice = createSlice({
  name: 'participants',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { clearError } = participantSlice.actions;
export default participantSlice.reducer;
export type { ParticipantState };