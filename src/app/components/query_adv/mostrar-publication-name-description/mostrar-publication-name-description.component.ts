// Import necessary Angular modules and services
import { Component, OnInit } from '@angular/core';
import { ResearchGroupI } from '../../../models/research-groups'; // Import the model for research groups
import { ResearchGroupsService } from '../../../services/research-groups.service'; // Import the research group service
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; // Import Angular's RouterModule for navigation
import { CardModule } from 'primeng/card'; // Import PrimeNG Card module for UI components
import { TableModule } from 'primeng/table'; // Import PrimeNG Table module for displaying data in tables
import { ButtonModule } from 'primeng/button'; // Import PrimeNG Button module for interactive buttons



// Define the Angular component
@Component({
  selector: 'app-filter-research-groups-by-technology', // Component selector used in the HTML template
  standalone: true, // Indicates that this component is standalone (doesn't depend on a module)
  imports: [
    RouterModule, // Allows routing within the component
    CardModule,   // PrimeNG UI module for card layout
    TableModule,  // PrimeNG UI module for displaying tables
    ButtonModule  // PrimeNG UI module for buttons
  ],
  templateUrl: './mostrar-publication-name-description.component.html', // HTML template path
  styleUrls: ['./mostrar-publication-name-description.component.css'] // CSS styling path
})

// Component class definition
export class FilterResearchGroupsByTechnologyComponent implements OnInit {
  public researchGroups: ResearchGroupI[] = []; // Array to store the filtered research groups data

  constructor(
    private researchGroupService: ResearchGroupsService, // Injects the research group service for data handling
    private router: Router // Injects Angular Router for navigation
  ) {}

  // Lifecycle hook that runs when the component initializes
  ngOnInit(): void {
    this.loadFilteredResearchGroups(); // Calls method to load filtered research groups
  }

  // Method to load filtered research groups by technology
  loadFilteredResearchGroups() {
    this.researchGroupService.filterResearchGroupsByTechnology() // Calls the filterResearchGroupsByTechnology method from the service
      .subscribe({
        next: (data) => {
          this.researchGroups = data; // Assigns the retrieved data to the researchGroups array
        },
        error: (error) => {
          console.error('Error loading research groups:', error); // Logs error if the API call fails
        }
      });
  }
}
