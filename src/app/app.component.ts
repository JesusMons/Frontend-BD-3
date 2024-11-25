// Import necessary modules and components from Angular and the application
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import { ContentComponent } from './components/layout/content/content.component';
import { FooterComponent } from './components/layout/footer/footer.component';

// Define the root component for the Angular application
@Component({
  selector: 'app-root', // Define the name used in the HTML to instantiate this component
  standalone: true, // Indicates that this component can be used without being declared in a NgModule
  imports: [
    CommonModule, // Common Angular module with basic directives like ngIf and ngFor
    RouterOutlet, // Directive used to mark where the router should display views
    HeaderComponent, // Header component of the layout
    AsideComponent, // Sidebar component of the layout
    ContentComponent, // Main content component of the layout
    FooterComponent // Footer component of the layout
  ],
  templateUrl: './app.component.html', // Define the path to the HTML template file
  styleUrl: './app.component.css' // Define the path to the CSS file for styling this component
})
export class AppComponent {
  title = 'frontend'; // Property to hold the title of the application
}
