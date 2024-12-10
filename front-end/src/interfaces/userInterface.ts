// src/interfaces/user.interface.ts (Frontend)
export interface IUser {
  fullName: string;
  phoneNumber: string;
  language: string; // e.g., 'en', 'am', 'om' for localized languages
  region: string; // Region for weather and agricultural data
  subscription: boolean; // Indicates if the user is subscribed
  email: string;
  password: string;
}
