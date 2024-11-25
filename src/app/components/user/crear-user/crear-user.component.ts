import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service'; // Import the UserService
import { ProgramsService } from '../../../services/programs.service'; // Import the ProgramsService
import { Router } from '@angular/router';
import { UserI } from '../../../models/user'; // Import the UserI interface
import { ProgramI } from '../../../models/programs'; // Import the ProgramI interface
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-crear-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './crear-user.component.html',
  styleUrls: ['./crear-user.component.css'] // Ensure it's in plural
})
export class CrearUserComponent implements OnInit {
  // Define the form group for the user form
  public form: FormGroup;
  public programs: ProgramI[] = []; // Define array to store programs
  userService = inject(UserService);
  programsService = inject(ProgramsService);

  // Constructor to initialize the form builder and router
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      program: [null, [Validators.required]], // Modified for dropdown selection
      user_type: ['', [Validators.required]]
    });
  }

  // Lifecycle hook that is called after the component is initialized
  ngOnInit(): void { 
    this.loadPrograms(); // Load programs when the component initializes
  }

  // Method to load programs from the service
  loadPrograms(): void {
    this.programsService.getAllPrograms().subscribe(
      (data: ProgramI[]) => {
        this.programs = data;
      },
      err => {
        console.log('Error loading programs', err);
      }
    );
  }

  // Method to handle form submission
  onSubmit(): void {
    const formValue: UserI = this.form.value;

    // Assign the selected program object based on the selected program ID
    formValue.program = this.programs.find(program => program.id === formValue.program);

    this.userService.createUser(formValue).subscribe(
      () => {
        this.router.navigateByUrl('user');
      },
      err => {
        console.log(err);
        console.log('User creation failed');
        console.log(formValue)

      }
    );
  }

  // Method to handle cancel action
  cancel(): void {
    this.router.navigateByUrl('/user');
  }

  // Getters for form controls
  get first_name() { return this.form.get('first_name'); }
  get last_name() { return this.form.get('last_name'); }
  get email() { return this.form.get('email'); }
  get program() { return this.form.get('program'); }
  get user_type() { return this.form.get('user_type'); }
}
