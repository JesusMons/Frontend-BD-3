import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service'; // Import the UserService
import { ProgramsService } from '../../../services/programs.service'; // Import the ProgramsService
import { UserI } from '../../../models/user'; // Import the UserI interface
import { ProgramI } from '../../../models/programs'; // Import the ProgramI interface
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './actualizar-user.component.html',
  styleUrls: ['./actualizar-user.component.css'] // Ensure it's in plural
})
export class ActualizarUserComponent implements OnInit {
  public form!: FormGroup;
  public programs: ProgramI[] = []; // Define array to store programs

  userService = inject(UserService);
  programsService = inject(ProgramsService);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [null, [Validators.required]], // Ensure to include the user ID
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      program: [null, [Validators.required]], // Modified for dropdown selection
      user_type: ['', [Validators.required]]
    });

    const id = this.route.snapshot.params['id'];
    this.getUser(id);
    this.loadPrograms(); // Load programs when the component initializes
  }

  getUser(id: number) {
    this.userService.getOneUser(id).subscribe({
      next: (data) => {
        this.form.patchValue(data);
      }
    });
  }

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

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const formValue: UserI = this.form.value;
    const userId = formValue.id;

    if (!userId) {
      return;
    }

    // Assign the selected program object based on the selected program ID
    formValue.program = this.programs.find(program => program.id === formValue.program);

    this.userService.updateUser(userId, formValue).subscribe(
      () => {
        this.router.navigateByUrl('/user');
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  cancel(): void {
    this.router.navigateByUrl('/user');
  }

  get first_name() { return this.form.get('first_name'); }
  get last_name() { return this.form.get('last_name'); }
  get email() { return this.form.get('email'); }
  get program() { return this.form.get('program'); }
  get user_type() { return this.form.get('user_type'); }
}
