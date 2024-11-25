import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ResearchGroupsService } from '../../../services/research-groups.service'; // Import the ResearchGroupsService
import { ResearchGroupI } from '../../../models/research-groups'; // Import the ResearchGroupI interface
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-crear-research-group',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './crear-research-groups.component.html',
  styleUrls: ['./crear-research-groups.component.css'] // Ensure it's in plural
})
export class CrearResearchGroupsComponent implements OnInit {
  // Define the form group for the research group form
  public form: FormGroup;
  researchGroupsService = inject(ResearchGroupsService);

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
    if (this.form.invalid) {
      return;
    }

    const formValue: ResearchGroupI = this.form.value;
    this.researchGroupsService.createResearchGroup(formValue).subscribe(
      () => {
        this.router.navigateByUrl('research-groups');
      },
      err => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  // Method to handle cancel action
  cancel(): void {
    this.router.navigateByUrl('/research-groups');
  }

  // Getters for form controls
  get name() { return this.form.get('name'); }
  get description() { return this.form.get('description'); }
}
