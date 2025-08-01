// User interface
export interface IUser {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: 'admin' | 'doctor' | 'patient';
  gender?: 'male' | 'female' | 'other';
  phoneNumber?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Doctor interface
export interface IDoctor extends IUser {
  specialization: string;
  bio?: string;
  experienceYears?: number;
  availability?: IDoctorTimeSlot[];
}

// Patient interface
export interface IPatient extends IUser {
  dateOfBirth?: string;
  medicalHistory?: string[];
}

// Time slot interface
export interface IDoctorTimeSlot {
  day: string; // 'Monday', 'Tuesday', etc.
  startTime: string; // '09:00'
  endTime: string;   // '11:00'
}

// Appointment interface
export interface IAppointment {
  id: string;
  doctorId: string;
  patientId: string;
  date: string; // ISO Date string
  timeSlot: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  createdAt?: Date;
  updatedAt?: Date;
}

// Prescription interface
export interface IPrescription {
  id: string;
  appointmentId: string;
  doctorId: string;
  patientId: string;
  medicines: IMedicine[];
  notes?: string;
  createdAt?: Date;
}

// Medicine interface
export interface IMedicine {
  name: string;
  dosage: string; // e.g., "2x/day"
  duration: string; // e.g., "7 days"
}

// Blog interface
export interface IBlog {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: Date;
}

// Review interface
export interface IReview {
  id: string;
  reviewerId: string;
  doctorId: string;
  rating: number; // 1–5
  comment: string;
  createdAt: Date;
}
