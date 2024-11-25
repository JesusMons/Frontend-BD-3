// Importar la interfaz ProgramI
import { ProgramI } from "./programs";

// Definir la interfaz UserI
export interface UserI {
    id?: number; // Identificador opcional
    first_name: string; // Nombre del usuario
    last_name: string; // Apellido del usuario
    email: string; // Correo electrónico del usuario (debe ser único)
    program?: ProgramI; // Programa asociado al usuario (puede ser nulo)
    user_type: 'admin' | 'researcher' | 'student'; // Tipo de usuario (admin, investigador, estudiante)
}

