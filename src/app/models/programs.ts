import { FacultyI } from "./faculties";
// Interface definition for ProgramI
export interface ProgramI {
    id?: number; // Optional identifier
    name: string; // Name of the academic program
    faculty: FacultyI; // Related faculty information
}
