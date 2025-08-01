export interface IDoctor {
  _id?: string;
  name: string;
  email: string;
  password: string;
  specialization: string;
  phone?: string;
  gender?: 'male' | 'female' | 'other';
  bio?: string;
  profileImage?: string;
  experience?: number; // in years
  available?: boolean;
  location?: string;
  role?: 'doctor';
  createdAt?: Date;
  updatedAt?: Date;
}
