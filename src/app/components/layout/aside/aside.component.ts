/*
  This TypeScript file defines the AsideComponent, an Angular component used to create a side menu in the application.
  It imports the PanelMenuModule from PrimeNG to create a panel menu, and it sets up the menu items in the ngOnInit lifecycle hook.
  Each menu item is configured with a label, icon, and optionally a routerLink or nested items.
  The component initializes a menu with items representing different sections of the application.
*/
import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside', // Define the name used in the HTML to instantiate this component
  standalone: true, // Indicates that this component can be used without being declared in a NgModule
  imports: [PanelMenuModule], // Import the PanelMenuModule from PrimeNG
  templateUrl: './aside.component.html', // Define the path to the HTML template file
  styleUrl: './aside.component.css', // Define the path to the CSS file for styling this component
})
export class AsideComponent {
  items: MenuItem[] = []; // Define the items property to hold menu items

  // Lifecycle hook that is called after the component is initialized
  ngOnInit(): void {
    // Initialize the menu items with labels, icons, and router links
    this.items = [
      {
        label: 'Usuarios',
        icon: 'pi pi-fw pi-users',
        items: [
          { label: 'Listar', icon: 'pi pi-list', routerLink: '/user' },
          { label: 'Crear', icon: 'pi pi-plus', routerLink: '/user/nuevo' },
          
        ]
      },
      {
        label: 'Facultades',
        icon: 'pi pi-fw pi-briefcase',
        items: [
          { label: 'Listar', icon: 'pi pi-list', routerLink: '/faculties' },
          { label: 'Crear', icon: 'pi pi-plus', routerLink: '/faculties/nuevo' },
        ]
      },
      {
        label: 'Programas',
        icon: 'pi pi-building-columns',
        items: [
          { label: 'Listar', icon: 'pi pi-list', routerLink: '/programs' },
          { label: 'Crear', icon: 'pi pi-plus', routerLink: '/programs/nuevo' },
        ]
      },
      {
        label: 'Publicaciones',
        icon: 'pi pi-cloud-upload',
        items: [
          { label: 'Listar', icon: 'pi pi-list', routerLink: '/publications' },
          { label: 'Crear', icon: 'pi pi-plus', routerLink: '/publications/nuevo' },
        ]
      },
      {
        label: 'Grupos de Investigación',
        icon: 'pi pi-sitemap',
        items: [
          { label: 'Listar', icon: 'pi pi-list', routerLink: '/research-groups' },
          { label: 'Crear', icon: 'pi pi-plus', routerLink: '/research-groups/nuevo' },
        ]
      },
      {
        label: 'Consultas Avanzadas',
        icon: 'pi pi-database',
        items: [
          { label: 'Publicación Por Fecha y Palabra', icon: 'pi pi-search', routerLink: '/publications/filter/date-word' },
          { label: 'Publicacion Por Año y Facultad', icon: 'pi pi-search', routerLink: '/publications/filter/year-faculty' },
          { label: 'Agrupar Publicaciones por Grupo de Investigación', icon: 'pi pi-search', routerLink: '/publications/count/research-group' },
          { label: 'Agrupar Publicaciones por Usuarios y Grupo de Investigación', icon: 'pi pi-search', routerLink: '/publications/group/user-research' },
          { label: 'Filtrar Grupos de Investigaciones por Palabra', icon: 'pi pi-search', routerLink: '/research-groups/filter/key-word' },
          { label: 'Mostrar los Usuarios de un Programa en Especifico', icon: 'pi pi-search', routerLink: '/users/filter/user-program/:id' }, 
          { label: 'Agrupar lo Estudiantes por Grupo de Investigación', icon: 'pi pi-search', routerLink: '/research-groups/group/user-research' }
        ]
      }
    ];
  }
}



