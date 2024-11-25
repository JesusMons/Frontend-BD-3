import { Component, OnInit } from '@angular/core';
import { FacultyI } from '../../../models/faculties'; // Import the FacultyI interface
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FacultiesService } from '../../../services/faculties.service'; // Import the FacultiesService

@Component({
  selector: 'app-mostrar-faculties',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-faculties.component.html',
  styleUrls: ['./mostrar-faculties.component.css'] // Ensure it's in plural
})
export class MostrarFacultiesComponent implements OnInit {
  public faculties: FacultyI[] = [];

  // Constructor to inject the FacultiesService and Router
  constructor(
    private facultiesService: FacultiesService,
    private router: Router
  ) {}

  // Lifecycle hook that is called after the component is initialized
  ngOnInit(): void {
    this.mostrarFaculties();
  }

  // Method to fetch and display all faculties
  mostrarFaculties() {
    this.facultiesService.getAllFaculties().subscribe({
      next: (data) => {
        this.faculties = data;
        // console.log(this.faculties)
      },
      error: (err) => {
        console.log('Error fetching faculties', err);
      }
    });
  }

  // Method to delete a faculty by ID
  eliminar(id: number): void {
    this.facultiesService.deleteFaculty(id).subscribe(
      () => {
        // this.messageService.add({severity:'warn', summary: 'Notification', detail: 'Faculty Deleted', life:5000});
        this.mostrarFaculties();
      },
      err => {
        console.log('error');
        this.router.navigateByUrl('/faculties');
      }
    );
  }
}
