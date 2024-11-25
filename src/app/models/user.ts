// Import the ProgramI interface
import { ProgramI } from "./programs";

// Define the UserI interface
export interface UserI {
    id?: number; // Optional identifier for the user
    first_name: string; // User's first name
    last_name: string; // User's last name
    email: string; // User's email address (must be unique)
    program?: ProgramI; // Program associated with the user (can be null)
    user_type: 'admin' | 'researcher' | 'student'; // User type (admin, researcher, student)
}
