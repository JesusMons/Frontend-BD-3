import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FacultiesService } from '../../../services/faculties.service'; // Import the FacultiesService
import { FacultyI } from '../../../models/faculties'; // Import the facultiesI interface
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-faculties',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './actualizar-faculties.component.html',
  styleUrls: ['./actualizar-faculties.component.css'] // Ensure it's in plural
})
export class ActualizarFacultiesComponent implements OnInit {
  public form!: FormGroup;

  facultiesService = inject(FacultiesService);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [null, [Validators.required]], // Asegúrate de incluir el id de la facultad
      name: ['', [Validators.required]]
    });

    const id = this.route.snapshot.params['id'];
    this.getfaculties(id);
  }

  getfaculties(id: number) {
    this.facultiesService.getOneFaculty(id).subscribe({
      next: (data) => {
        this.form.setValue(data);
      }
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const formValue: FacultyI = this.form.value;
    const facultiesId = formValue.id;

    if (!facultiesId) {
      return;
    }

    this.facultiesService.updateFaculty(facultiesId, formValue).subscribe(
      () => {
        this.router.navigateByUrl('/faculties');
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  cancel(): void {
    this.router.navigateByUrl('/faculties');
  }

  get name() { return this.form.get('name'); }
}
