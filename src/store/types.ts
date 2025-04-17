export interface RegistrationPayload {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  type: 'ADMIN';
  acceptEmail?: boolean;
  subscriptionLevel?: number;
  mfaEnabled?: boolean;
  city? : string;
  province? : string;
  password: string;
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
  city? : string;
  province? : string;
}

export interface KinesiologistInfo {
  accreditationBody?: string;
  accreditationNumber?: string;
  approved?: boolean;
  availableTimeBitmap?: string;
  bio?: string;
  degree?: string;
  experiences?: number;
  insurancePaperUrl?: string;
  offerFreeConsultation?: boolean;
  specialization?: string;
  userId?: number;
};

export interface ParticipantInfo {
  abilitiesTo10?: string;
  barriers?: string;
  chronicCondition?: string;
  emergencyContactName?: string;
  emergencyContactPhone?: string;
  eulaInfo?: string;
  level?: number;
  sessionType?: string;
  smartGoals?: string;
  userId?: number;
  willingImprovingHealth?: number;
};

export interface UserProfile extends RegisteredUser {
  avatar?: string;
  birthDate?: string;
  language?: string;
  interests?: string;
  password?: string;

  kinesiologistInfo?: KinesiologistInfo;
  participantInfo?: ParticipantInfo;
}

export interface ApiResponse<T> {
  code: number;
  message: string;
  traceId: string;
  data: T;
}

export interface UserState {
  currentUser: UserProfile | null;
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