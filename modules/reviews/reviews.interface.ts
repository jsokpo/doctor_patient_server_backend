export interface IReview {
  _id?: string;
  doctorId: string;
  patientId: string;
  rating: number; // Typically 1 to 5
  comment?: string;
  appointmentId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
