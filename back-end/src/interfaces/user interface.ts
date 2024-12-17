// src/interfaces/user.interface.ts
import { Document } from "mongoose";

export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  language: string; // e.g., 'en', 'am', 'om' for localized languages
  region: string; // Region for weather and agricultural data
  subscription: boolean; // Indicates if the user is subscribed
}
