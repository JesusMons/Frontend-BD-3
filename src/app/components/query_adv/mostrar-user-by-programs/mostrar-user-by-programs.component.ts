import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service'; // Service to manage users
import { UserI } from '../../../models/user'; // User model interface
import { ActivatedRoute } from '@angular/router'; // To retrieve URL parameters
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card'; // PrimeNG Card UI component
import { TableModule } from 'primeng/table'; // PrimeNG Table for displaying data
import { ButtonModule } from 'primeng/button'; // PrimeNG Buttons for interaction

@Component({
  selector: 'app-users-by-program', // Component's selector tag
  standalone: true, // Indicates the component is standalone
  imports: [
    RouterModule, // For routing functionality
    CardModule,   // PrimeNG Card for UI layout
    TableModule,  // PrimeNG Table for user data display
    ButtonModule  // PrimeNG Buttons
  ],
  templateUrl: './mostrar-user-by-programs.component.html', // Component's HTML template
  styleUrls: ['./mostrar-user-by-programs.component.css'] // Component's CSS styles
})
export class UsersByProgramComponent implements OnInit {
  public users: UserI[] = []; // Array to store users
  public programId!: number; // Program ID obtained from the URL

  constructor(
    private userService: UserService, // Inject UserService to fetch user data
    private route: ActivatedRoute // Inject ActivatedRoute to get route parameters
  ) {}

  ngOnInit(): void {
    // Retrieve the `id` parameter from the URL
    this.route.params.subscribe(params => {
      const id = Number(params['id']); // Convert the parameter to a number
      if (!isNaN(id)) {
        this.programId = id; // Assign the program ID
        this.loadUsersByProgram(id); // Call the service to load users for the program
      } else {
        console.error('Invalid program ID:', params['id']); // Log an error if the ID is invalid
      }
    });
  }

  // Method to load users for a specific program
  loadUsersByProgram(id: number): void {
    this.userService.getUsersByProgram(id).subscribe({
      next: (data) => {
        this.users = data; // Assign the fetched users to the array
      },
      error: (error) => {
        console.error('Error loading users by program:', error); // Log errors if the API call fails
      }
    });
  }
}
