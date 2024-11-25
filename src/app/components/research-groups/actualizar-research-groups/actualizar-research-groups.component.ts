import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ResearchGroupsService } from '../../../services/research-groups.service'; // Import the ResearchGroupsService
import { ResearchGroupI } from '../../../models/research-groups'; // Import the ResearchGroupI interface
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-research-group',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './actualizar-research-groups.component.html',
  styleUrls: ['./actualizar-research-groups.component.css'] // Ensure it's in plural
})
export class ActualizarResearchGroupsComponent implements OnInit {
  public form!: FormGroup;
  researchGroupsService = inject(ResearchGroupsService);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [null, [Validators.required]], // Ensure to include the id of the research group
      name: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });

    const id = this.route.snapshot.params['id'];
    this.getResearchGroup(id);
  }

  getResearchGroup(id: number) {
    this.researchGroupsService.getOneResearchGroup(id).subscribe({
      next: (data) => {
        this.form.patchValue(data);
      }
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const formValue: ResearchGroupI = this.form.value;
    const researchGroupId = formValue.id;

    if (!researchGroupId) {
      return;
    }

    this.researchGroupsService.updateResearchGroup(researchGroupId, formValue).subscribe(
      () => {
        this.router.navigateByUrl('/research-groups');
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  cancel(): void {
    this.router.navigateByUrl('/research-groups');
  }

  get name() { return this.form.get('name'); }
  get description() { return this.form.get('description'); }
}
