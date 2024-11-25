// Importar las interfaces UserI y ResearchGroupI
import { UserI } from './user';
import { ResearchGroupI } from './research-groups';

// Definir la interfaz PublicationI
export interface PublicationI {
    id?: number; // Identificador opcional
    title: string; // Título de la publicación
    abstract?: string; // Resumen opcional de la publicación
    publication_date: Date; // Fecha de publicación
    research_group: ResearchGroupI; // Grupo de investigación asociado
    user: UserI; // Usuario (autor) asociado
}
