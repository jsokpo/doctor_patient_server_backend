export interface IPatient {
  _id?: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  gender?: 'male' | 'female' | 'other';
  dateOfBirth?: Date;
  address?: string;
  profileImage?: string;
  role?: 'patient';
  createdAt?: Date;
  updatedAt?: Date;
}
