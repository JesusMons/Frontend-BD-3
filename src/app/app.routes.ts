import { Routes } from '@angular/router';
import { MostrarProgramsComponent } from './components/programs/mostrar-programs/mostrar-programs.component';
import { ActualizarProgramsComponent } from './components/programs/actualizar-programs/actualizar-programs.component';
import { CrearProgramsComponent } from './components/programs/crear-programs/crear-programs.component';
import { EliminarProgramsComponent } from './components/programs/eliminar-programs/eliminar-programs.component';

import { MostrarFacultiesComponent } from './components/faculties/mostrar-faculties/mostrar-faculties.component';
import { ActualizarFacultiesComponent } from './components/faculties/actualizar-faculties/actualizar-faculties.component';
import { CrearFacultiesComponent } from './components/faculties/crear-faculties/crear-faculties.component';
import { EliminarFacultiesComponent } from './components/faculties/eliminar-faculties/eliminar-faculties.component';

import { MostrarPublicationsComponent } from './components/publications/mostrar-publications/mostrar-publications.component';
import { ActualizarPublicationsComponent } from './components/publications/actualizar-publications/actualizar-publications.component';
import { CrearPublicationsComponent } from './components/publications/crear-publications/crear-publications.component';
import { EliminarPublicationsComponent } from './components/publications/eliminar-publications/eliminar-publications.component';

import { MostrarResearchGroupsComponent } from './components/research-groups/mostrar-research-groups/mostrar-research-groups.component';
import { ActualizarResearchGroupsComponent } from './components/research-groups/actualizar-research-groups/actualizar-research-groups.component';
import { CrearResearchGroupsComponent } from './components/research-groups/crear-research-groups/crear-research-groups.component';
import { EliminarResearchGroupsComponent } from './components/research-groups/eliminar-research-groups/eliminar-research-groups.component';

import { MostrarUserComponent } from './components/user/mostrar-user/mostrar-user.component';
import { ActualizarUserComponent } from './components/user/actualizar-user/actualizar-user.component';
import { CrearUserComponent } from './components/user/crear-user/crear-user.component';
import { EliminarUserComponent } from './components/user/eliminar-user/eliminar-user.component';
import { PublicationFilterByWordDateComponent } from './components/query_adv/mostrar-publication-word-date/mostrar-publication-word-date.component';
import { FilteredPublicationsByDateAndFacultyComponent } from './components/query_adv/mostrar-publication-year-faculty/mostrar-publication-year-faculty.component';
import { GroupPublicationsByResearchGroupComponent } from './components/query_adv/mostrar-count-publications-research/mostrar-count-publications-research.component';
import { GroupPublicationsByUserAndResearchGroupComponent } from './components/query_adv/mostrar-gruoup-user-and-reserch/mostrar-gruoup-user-and-reserch.component';
import { FilterResearchGroupsByTechnologyComponent } from './components/query_adv/mostrar-publication-name-description/mostrar-publication-name-description.component';
import { UsersByProgramComponent } from './components/query_adv/mostrar-user-by-programs/mostrar-user-by-programs.component';
import { GroupUsersByResearchGroupComponent } from './components/query_adv/mostrar-group-user-research/mostrar-group-user-research.component';


// Define application routes and associate each route with a component
export const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/', 
        pathMatch: 'full' // Redirect the empty path to the root
    },
    {
        path: "programs",
        component: MostrarProgramsComponent // Route to display programs
    },
    {
        path: "programs/nuevo",
        component: CrearProgramsComponent // Route to create a new program
    },
    {
        path: "programs/edit/:id",
        component: ActualizarProgramsComponent // Route to edit a program
    },
    {
        path: "programs/eliminar/:id",
        component: EliminarProgramsComponent // Route to delete a program
    },
    {
        path: "faculties",
        component: MostrarFacultiesComponent // Route to display faculties
    },
    {
        path: "faculties/nuevo",
        component: CrearFacultiesComponent // Route to create a new faculty
    },
    {
        path: "faculties/edit/:id",
        component: ActualizarFacultiesComponent // Route to edit a faculty
    },
    {
        path: "faculties/eliminar/:id",
        component: EliminarFacultiesComponent // Route to delete a faculty
    },
    {
        path: "publications",
        component: MostrarPublicationsComponent // Route to display publications
    },
    {
        path: "publications/nuevo",
        component: CrearPublicationsComponent // Route to create a new publication
    },
    {
        path: "publications/edit/:id",
        component: ActualizarPublicationsComponent // Route to edit a publication
    },
    {
        path: "publications/eliminar/:id",
        component: EliminarPublicationsComponent // Route to delete a publication
    },
    {
        path: "research-groups",
        component: MostrarResearchGroupsComponent // Route to display research groups
    },
    {
        path: "research-groups/nuevo",
        component: CrearResearchGroupsComponent // Route to create a new research group
    },
    {
        path: "research-groups/edit/:id",
        component: ActualizarResearchGroupsComponent // Route to edit a research group
    },
    {
        path: "research-groups/eliminar/:id",
        component: EliminarResearchGroupsComponent // Route to delete a research group
    },
    {
        path: "user",
        component: MostrarUserComponent // Route to display users
    },
    {
        path: "user/nuevo",
        component: CrearUserComponent // Route to create a new user
    },
    {
        path: "user/edit/:id",
        component: ActualizarUserComponent // Route to edit a user
    },
    {
        path: "user/eliminar/:id",
        component: EliminarUserComponent // Route to delete a user
    },
    {
        path: "publications/filter/date-word",
        component: PublicationFilterByWordDateComponent // Route to filter post by word and date
    },
    {
        path: "publications/filter/year-faculty",
        component: FilteredPublicationsByDateAndFacultyComponent // Route to filter post by year and faculty
    },
    {
        path: "publications/count/research-group",
        component: GroupPublicationsByResearchGroupComponent // Route to group publications by research group
    },
    {
        path: "publications/group/user-research",
        component: GroupPublicationsByUserAndResearchGroupComponent // Route to group publications by user and research group
    },
    {
        path: "research-groups/filter/key-word",
        component: FilterResearchGroupsByTechnologyComponent // Route for filtering research groups related to word in the name and description
    },
    {
        path: "users/filter/user-program/:id",
        component: UsersByProgramComponent // Route to show the students of a specific program
    },
    {
        path: "research-groups/group/user-research",
        component: GroupUsersByResearchGroupComponent // Route to group engineering students according to their research hotbed
    },
];
