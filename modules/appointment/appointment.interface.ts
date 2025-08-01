export interface IAppointment {
  _id?: string;
  doctorId: string;
  patientId: string;
  timeSlotId: string;
  appointmentDate: Date;
  status?: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  reason?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
