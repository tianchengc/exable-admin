import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import participantReducer from './slices/participantSlice';
import staffReducer from './slices/staffSlice';
import scheduleReducer from './slices/scheduleSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    participant: participantReducer,
    staff: staffReducer,
    schedule: scheduleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 