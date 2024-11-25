import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramsService } from '../../../services/programs.service'; // Import the ProgramsService
import { ProgramI } from '../../../models/programs'; // Import the ProgramI interface
import { FacultiesService } from '../../../services/faculties.service'; // Import the FacultiesService
import { FacultyI } from '../../../models/faculties'; // Import the FacultyI interface
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-program',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './actualizar-programs.component.html',
  styleUrls: ['./actualizar-programs.component.css'] // Ensure it's in plural
})
export class ActualizarProgramsComponent implements OnInit {
  public form!: FormGroup;
  public faculties: FacultyI[] = [];

  programsService = inject(ProgramsService);
  facultiesService = inject(FacultiesService);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [null, [Validators.required]], // Ensure to include the id of the program
      name: ['', [Validators.required]],
      faculty: [null, [Validators.required]]
    });

    const id = this.route.snapshot.params['id'];
    this.getProgram(id);
    this.loadFaculties(); // Load faculties when the component initializes
  }

  getProgram(id: number) {
    this.programsService.getOneProgram(id).subscribe({
      next: (data) => {
        this.form.patchValue(data);
      }
    });
  }

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

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const formValue: ProgramI = this.form.value;
    const programId = formValue.id;

    if (!programId) {
      return;
    }

    this.programsService.updateProgram(programId, formValue).subscribe(
      () => {
        this.router.navigateByUrl('/programs');
      },
      (err: any) => {
        console.log(err);
        console.log(formValue)
      }
    );
  }

  cancel(): void {
    this.router.navigateByUrl('/programs');
  }

  get name() { return this.form.get('name'); }
  get faculty() { return this.form.get('faculty'); }
}
