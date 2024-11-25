// Import necessary Angular modules and services
import { Component, OnInit } from '@angular/core';
import { PublicationI } from '../../../models/publications'; // Import the publications model
import { PublicationsService } from '../../../services/publications.service'; // Import the publications service
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; // Import Angular's RouterModule for navigation
import { CardModule } from 'primeng/card'; // Import PrimeNG Card module for UI components
import { TableModule } from 'primeng/table'; // Import PrimeNG Table module for displaying data in tables
import { ButtonModule } from 'primeng/button'; // Import PrimeNG Button module for interactive buttons

// Define the Angular component
@Component({
  selector: 'app-filtered-publications-by-date-and-faculty', // Component selector used in the HTML template
  standalone: true, // Indicates that this component is standalone (doesn't depend on a module)
  imports: [
    RouterModule, // Allows routing within the component
    CardModule,   // PrimeNG UI module for card layout
    TableModule,  // PrimeNG UI module for displaying tables
    ButtonModule  // PrimeNG UI module for buttons
  ],
  templateUrl: './mostrar-publication-year-faculty.component.html', // HTML template path
  styleUrls: ['./mostrar-publication-year-faculty.component.css'] // CSS styling path
})

// Component class definition
export class FilteredPublicationsByDateAndFacultyComponent implements OnInit {
  public publications: PublicationI[] = []; // Array to store the filtered publications

  constructor(
    private publicationsService: PublicationsService, // Injects the publications service for data handling
    private router: Router // Injects Angular Router for navigation
  ) {}

  // Lifecycle hook that runs when the component initializes
  ngOnInit(): void {
    this.loadFilteredPublications(); // Calls method to load filtered publications
  }

  // Method to load filtered publications by date and faculty
  loadFilteredPublications() {
    this.publicationsService.filterPublicationsByDateAndFaculty() // Calls the filterPublicationsByDateAndFaculty method from the service
      .subscribe({
        next: (data) => {
          this.publications = data; // Assigns the retrieved data to the publications array
        },
        error: (error) => {
          console.error('Error loading publications:', error); // Logs error if the API call fails
        }
      });
  }
}
