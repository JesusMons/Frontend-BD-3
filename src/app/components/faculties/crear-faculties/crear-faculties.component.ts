import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FacultiesService } from '../../../services/faculties.service'; // Import the FacultiesService
import { FacultyI } from '../../../models/faculties'; // Import the facultiesI interface
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-crear-faculties',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './crear-faculties.component.html',
  styleUrls: ['./crear-faculties.component.css'] // Ensure it's in plural
})
export class CrearFacultiesComponent implements OnInit {
  // Define the form group for the faculties form
  public form: FormGroup;
  facultiesService = inject(FacultiesService);

  // Constructor to initialize the form builder and router
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  // Lifecycle hook that is called after the component is initialized
  ngOnInit(): void { }

  // Method to handle form submission
  onSubmit(): void {
    const formValue: FacultyI = this.form.value;
    this.facultiesService.createFaculty(formValue).subscribe(
      () => {
        this.router.navigateByUrl('faculties');
      },
      err => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  // Method to handle cancel action
  cancel(): void {
    this.router.navigateByUrl('/faculties');
  }

  // Getters for form controls
  get name() { return this.form.get('name'); }
  get description() { return this.form.get('description'); }
}
