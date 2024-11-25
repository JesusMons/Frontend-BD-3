import { Component, OnInit } from '@angular/core';
import { ResearchGroupsService } from '../../../services/research-groups.service'; // Service to manage research groups
import { GroupUsersByResearchGroupI } from '../../../models/groupuserresearch'; // Model interface for grouped data
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card'; // PrimeNG Card for UI layout
import { TableModule } from 'primeng/table'; // PrimeNG Table for displaying grouped data
import { ButtonModule } from 'primeng/button'; // PrimeNG Buttons


@Component({
  selector: 'app-group-users-by-research-group', // Component's selector tag
  standalone: true, // Indicates the component is standalone
  imports: [
    RouterModule, // For routing functionality
    CardModule,   // PrimeNG Card for UI layout
    TableModule,  // PrimeNG Table for grouped data display
    ButtonModule  // PrimeNG Buttons
  ],
  templateUrl: './mostrar-group-user-research.component.html', // Component's HTML template
  styleUrls: ['./mostrar-group-user-research.component.css'] // Component's CSS styles
})
export class GroupUsersByResearchGroupComponent implements OnInit {
  public groups: GroupUsersByResearchGroupI[] = []; // Array to store grouped data

  constructor(
    private researchGroupsService: ResearchGroupsService // Inject the service to fetch grouped data
  ) {}

  ngOnInit(): void {
    this.loadGroups(); // Call the method to load grouped data on component initialization
  }

  // Method to load grouped users by research group
  loadGroups(): void {
    this.researchGroupsService.filterUsersByResearchGroup().subscribe({
      next: (data) => {
        this.groups = data; // Assign the fetched data to the array
      },
      error: (error) => {
        console.error('Error loading grouped data:', error); // Log errors if the API call fails
      }
    });
  }
}
