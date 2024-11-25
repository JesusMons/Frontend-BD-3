import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProgramsService } from '../../../services/programs.service'; // Import the ProgramsService
import { FacultiesService } from '../../../services/faculties.service'; // Import the FacultiesService
import { ProgramI } from '../../../models/programs'; // Import the ProgramI interface
import { FacultyI } from '../../../models/faculties'; // Import the FacultyI interface
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-crear-program',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './crear-programs.component.html',
  styleUrls: ['./crear-programs.component.css'] // Ensure it's in plural
})
export class CrearProgramsComponent implements OnInit {
  // Define the form group for the program form
  public form: FormGroup;
  public faculties: FacultyI[] = []; // Define array to store faculties
  programsService = inject(ProgramsService);
  facultiesService = inject(FacultiesService);

  // Constructor to initialize the form builder and router
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      faculty: [null, [Validators.required]] // Drop-down selection for faculty
    });
  }

  // Lifecycle hook that is called after the component is initialized
  ngOnInit(): void {
    this.loadFaculties(); // Load faculties when the component initializes
  }

  // Method to load faculties from the service
  loadFaculties(): void {
    this.facultiesService.getAllFaculties().subscribe(
      (data: FacultyI[]) => {
        this.faculties = data;
      },
      err => {
        console.log('Error loading faculties', err);
      }
    );
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const formValue: ProgramI = this.form.value;
    this.programsService.createProgram(formValue).subscribe(
      () => {
        this.router.navigateByUrl('programs');
      },
      err => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  // Method to handle cancel action
  cancel(): void {
    this.router.navigateByUrl('/programs');
  }

  // Getters for form controls
  get name() { return this.form.get('name'); }
  get faculty() { return this.form.get('faculty'); }
}
