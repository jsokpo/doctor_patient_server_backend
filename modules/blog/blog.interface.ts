export interface IBlog {
  _id?: string;
  title: string;
  content: string;
  image?: string;
  authorId: string; // could be a doctor or admin
  tags?: string[];
  published?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
