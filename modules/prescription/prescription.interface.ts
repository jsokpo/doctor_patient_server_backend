export interface IPrescription {
  _id?: string;
  doctorId: string;
  patientId: string;
  appointmentId: string;
  medicines: {
    name: string;
    dosage: string;
    frequency: string;
    duration: string;
    instructions?: string;
  }[];
  notes?: string;
  issuedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
