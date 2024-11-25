import { Component, OnInit } from '@angular/core';
import { ProgramI } from '../../../models/programs'; // Import the ProgramI interface
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgramsService } from '../../../services/programs.service'; // Import the ProgramsService

@Component({
  selector: 'app-mostrar-programs',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-programs.component.html',
  styleUrls: ['./mostrar-programs.component.css'] // Ensure it's in plural
})
export class MostrarProgramsComponent implements OnInit {
  public programs: ProgramI[] = [];

  // Constructor to inject the ProgramsService and Router
  constructor(
    private programsService: ProgramsService,
    private router: Router
  ) {}

  // Lifecycle hook that is called after the component is initialized
  ngOnInit(): void {
    this.mostrarPrograms();
  }

  // Method to fetch and display all programs
  mostrarPrograms() {
    this.programsService.getAllPrograms().subscribe({
      next: (data) => {
        this.programs = data;
        // console.log(this.programs)
      },
      error: (err) => {
        console.log('Error fetching programs', err);
      }
    });
  }

  // Method to delete a program by ID
  eliminar(id: number): void {
    this.router.navigateByUrl('/programs');
    this.programsService.deleteProgram(id).subscribe(
      () => {
        
        this.mostrarPrograms();
      },
      err => {
        console.log('error');
        console.log(id)
        this.router.navigateByUrl('/programs');
      }
    );
  }
}
