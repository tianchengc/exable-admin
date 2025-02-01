import { combineReducers } from 'redux';
import userReducer from './userReducer';
import participantReducer from './participantReducer';
import staffReducer from './staffReducer';
import scheduleReducer from './scheduleReducer';

const rootReducer = combineReducers({
  user: userReducer,
  participants: participantReducer,
  staff: staffReducer,
  schedules: scheduleReducer,
});

export default rootReducer; 