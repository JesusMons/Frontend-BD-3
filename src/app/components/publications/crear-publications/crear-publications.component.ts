import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PublicationsService } from '../../../services/publications.service'; // Import the PublicationsService
import { ResearchGroupsService } from '../../../services/research-groups.service'; // Import the ResearchGroupsService
import { UserService } from '../../../services/user.service'; // Import the UsersService
import { PublicationI } from '../../../models/publications'; // Import the PublicationI interface
import { ResearchGroupI } from '../../../models/research-groups'; // Import the ResearchGroupI interface
import { UserI } from '../../../models/user'; // Import the UserI interface
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-crear-publication',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './crear-publications.component.html',
  styleUrls: ['./crear-publications.component.css'] // Ensure it's in plural
})
export class CrearPublicationsComponent implements OnInit {
  // Define the form group for the publication form
  public form: FormGroup;
  public researchGroups: ResearchGroupI[] = []; // Define array to store research groups
  public users: UserI[] = []; // Define array to store users
  publicationsService = inject(PublicationsService);
  researchGroupsService = inject(ResearchGroupsService);
  usersService = inject(UserService);

  // Constructor to initialize the form builder and router
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      abstract: ['', [Validators.required]],
      publication_date: ['', [Validators.required]],
      research_group: [null, [Validators.required]], // Drop-down selection for research group
      user: [null, [Validators.required]] // Drop-down selection for user
    });
  }

  // Lifecycle hook that is called after the component is initialized
  ngOnInit(): void {
    this.loadResearchGroups(); // Load research groups when the component initializes
    this.loadUsers(); // Load users when the component initializes
  }

  // Method to load research groups from the service
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

  // Method to load users from the service
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

  // Method to handle form submission
  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const formValue: PublicationI = {
      ...this.form.value,
      user_name: this.users.find(user => user.id === this.form.value.user)?.first_name + ' ' + this.users.find(user => user.id === this.form.value.user)?.last_name,
      research_group_name: this.researchGroups.find(group => group.id === this.form.value.research_group)?.name
    };

    this.publicationsService.createPublication(formValue).subscribe(
      () => {
        this.router.navigateByUrl('publications');
      },
      err => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  // Method to handle cancel action
  cancel(): void {
    this.router.navigateByUrl('/publications');
  }

  // Getters for form controls
  get title() { return this.form.get('title'); }
  get abstract() { return this.form.get('abstract'); }
  get publication_date() { return this.form.get('publication_date'); }
  get research_group() { return this.form.get('research_group'); }
  get user() { return this.form.get('user'); }
}
