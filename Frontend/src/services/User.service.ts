export enum Gender {
  Male = "Male",
  Female = "Female",
}

export interface User {
  _id: string;
  displayName: string;
  email: string;
  photoURL: string;
  yearsOld: number;
  gender: Gender;
}

export interface RegistrationUser {
  displayName: string;
  email: string;
  photoURL: File | null;
  dateOfBirth: Date;
  gender: Gender;
}
