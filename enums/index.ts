// User Roles
export enum UserRole {
  ADMIN = 'admin',
  DOCTOR = 'doctor',
  PATIENT = 'patient',
}

// Gender
export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

// Appointment Status
export enum AppointmentStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed',
}

// Days of the Week for TimeSlots
export enum WeekDay {
  MONDAY = 'monday',
  TUESDAY = 'tuesday',
  WEDNESDAY = 'wednesday',
  THURSDAY = 'thursday',
  FRIDAY = 'friday',
  SATURDAY = 'saturday',
  SUNDAY = 'sunday',
}

// Blog Visibility
export enum BlogStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

// Specialization Type (for Doctors)
export enum Specialization {
  CARDIOLOGIST = 'cardiologist',
  DERMATOLOGIST = 'dermatologist',
  PEDIATRICIAN = 'pediatrician',
  NEUROLOGIST = 'neurologist',
  GENERAL_PRACTITIONER = 'general_practitioner',
  ORTHOPEDIC = 'orthopedic',
  GYNECOLOGIST = 'gynecologist',
  DENTIST ='dentist',
}

// Medicine Types
export enum MedicineType {
  TABLET = 'tablet',
  CAPSULE = 'capsule',
  SYRUP = 'syrup',
  INJECTION = 'injection',
  DROPS = 'drops',
  OINTMENT = 'ointment',
}
