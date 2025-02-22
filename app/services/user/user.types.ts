export interface IUser {
    email: string;
    username: string;
    name: string;
    otp: string | null;
    role: 'DEFAULT_USER' | 'SUPER_ADMIN';
    password: string;
    _id: string;
    socialAccount: string[];
    createdAt: string;
    updatedAt: string;
  }