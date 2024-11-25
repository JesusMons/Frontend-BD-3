// Import necessary Angular modules and services
import { Component, OnInit } from '@angular/core';
import { ResearchGroupSummaryI } from '../../../models/researchgroupsummary'; // Import the model for grouped data
import { PublicationsService } from '../../../services/publications.service'; // Import the publications service
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; // Import Angular's RouterModule for navigation
import { CardModule } from 'primeng/card'; // Import PrimeNG Card module for UI components
import { TableModule } from 'primeng/table'; // Import PrimeNG Table module for displaying data in tables
import { ButtonModule } from 'primeng/button'; // Import PrimeNG Button module for interactive buttons

// Define the Angular component
@Component({
  selector: 'app-group-publications-by-research-group', // Component selector used in the HTML template
  standalone: true, // Indicates that this component is standalone (doesn't depend on a module)
  imports: [
    RouterModule, // Allows routing within the component
    CardModule,   // PrimeNG UI module for card layout
    TableModule,  // PrimeNG UI module for displaying tables
    ButtonModule  // PrimeNG UI module for buttons
  ],
  templateUrl: './mostrar-count-publications-research.component.html', // HTML template path
  styleUrls: ['./mostrar-count-publications-research.component.css'] // CSS styling path
})

// Component class definition
export class GroupPublicationsByResearchGroupComponent implements OnInit {
  public groupedPublications: ResearchGroupSummaryI[] = []; // Array to store the grouped publications data

  constructor(
    private publicationsService: PublicationsService, // Injects the publications service for data handling
    private router: Router // Injects Angular Router for navigation
  ) {}

  // Lifecycle hook that runs when the component initializes
  ngOnInit(): void {
    this.loadGroupedPublications(); // Calls method to load grouped publications
  }

  // Method to load grouped publications by research group
  loadGroupedPublications() {
    this.publicationsService.groupPublicationsByResearchGroup() // Calls the groupPublicationsByResearchGroup method from the service
      .subscribe({
        next: (data) => {
          this.groupedPublications = data; // Assigns the retrieved data to the groupedPublications array
        },
        error: (error) => {
          console.error('Error loading grouped publications:', error); // Logs error if the API call fails
        }
      });
  }
}
