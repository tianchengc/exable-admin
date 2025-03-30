// User types
export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface RegistrationPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  type: 'ADMIN';
}

export interface RegisteredUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  type: 'ADMIN';
  acceptEmail: boolean;
  subscriptionLevel: number;
  mfaEnabled: boolean;
}

export interface ApiResponse<T> {
  code: number;
  message: string;
  traceId: string;
  data: T;
}

export interface UserState {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
}

// Participant types
export interface Participant {
  id: string;
  name: string;
  email: string;
  status: string;
}

export interface ParticipantState {
  participants: Participant[];
  loading: boolean;
  error: string | null;
}

// Staff types
export interface Staff {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
}

export interface StaffState {
  staffList: Staff[];
  loading: boolean;
  error: string | null;
}

// Schedule types
export interface Schedule {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  participantIds: string[];
  staffIds: string[];
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface ScheduleState {
  schedules: Schedule[];
  loading: boolean;
  error: string | null;
}

export interface RootState {
  user: UserState;
  participants: ParticipantState;
  staff: StaffState;
  schedules: ScheduleState;
} 