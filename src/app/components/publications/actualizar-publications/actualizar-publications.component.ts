import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicationsService } from '../../../services/publications.service'; // Import the PublicationsService
import { ResearchGroupsService } from '../../../services/research-groups.service'; // Import the ResearchGroupsService
import { UserService } from '../../../services/user.service'; // Import the UsersService
import { PublicationI } from '../../../models/publications'; // Import the PublicationI interface
import { ResearchGroupI } from '../../../models/research-groups'; // Import the ResearchGroupI interface
import { UserI } from '../../../models/user'; // Import the UserI interface
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-publication',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './actualizar-publications.component.html',
  styleUrls: ['./actualizar-publications.component.css'] // Ensure it's in plural
})
export class ActualizarPublicationsComponent implements OnInit {
  public form!: FormGroup;
  public researchGroups: ResearchGroupI[] = [];
  public users: UserI[] = [];

  publicationsService = inject(PublicationsService);
  researchGroupsService = inject(ResearchGroupsService);
  usersService = inject(UserService);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [null, [Validators.required]], // Ensure to include the id of the publication
      title: ['', [Validators.required]],
      abstract: ['', [Validators.required]],
      publication_date: ['', [Validators.required]],
      research_group: [null, [Validators.required]],
      user: [null, [Validators.required]]
    });

    const id = this.route.snapshot.params['id'];
    this.getPublication(id);
    this.loadResearchGroups(); // Load research groups when the component initializes
    this.loadUsers(); // Load users when the component initializes
  }

  getPublication(id: number) {
    this.publicationsService.getOnePublication(id).subscribe({
      next: (data) => {
        this.form.patchValue(data);
      }
    });
  }

  loadResearchGroups(): void {
    this.researchGroupsService.getAllResearchGroups().subscribe(
      (data: ResearchGroupI[]) => {
        this.researchGroups = data;
      },
      err => {
        console.log('Error loading research groups', err);
      }
    );
  }

  loadUsers(): void {
    this.usersService.getAllUsers().subscribe(
      (data: UserI[]) => {
        this.users = data;
      },
      err => {
        console.log('Error loading users', err);
      }
    );
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const formValue: PublicationI = this.form.value;
    const publicationId = formValue.id;

    if (!publicationId) {
      return;
    }

    this.publicationsService.updatePublication(publicationId, formValue).subscribe(
      () => {
        this.router.navigateByUrl('/publications');
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  cancel(): void {
    this.router.navigateByUrl('/publications');
  }

  get title() { return this.form.get('title'); }
  get abstract() { return this.form.get('abstract'); }
  get publication_date() { return this.form.get('publication_date'); }
  get research_group() { return this.form.get('research_group'); }
  get user() { return this.form.get('user'); }
}
