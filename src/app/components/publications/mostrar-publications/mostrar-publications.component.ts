import { Component, OnInit } from '@angular/core';
import { PublicationI } from '../../../models/publications'; // Import the PublicationI interface
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PublicationsService } from '../../../services/publications.service'; // Import the PublicationsService

@Component({
  selector: 'app-mostrar-publications',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-publications.component.html',
  styleUrls: ['./mostrar-publications.component.css'] // Ensure it's in plural
})
export class MostrarPublicationsComponent implements OnInit {
  public publications: PublicationI[] = [];

  // Constructor to inject the PublicationsService and Router
  constructor(
    private publicationsService: PublicationsService,
    private router: Router
  ) {}

  // Lifecycle hook that is called after the component is initialized
  ngOnInit(): void {
    this.mostrarPublications();
  }

  // Method to fetch and display all publications
  mostrarPublications() {
    this.publicationsService.getAllPublications().subscribe({
      next: (data) => {
        this.publications = data;
        // console.log(this.publications)
      },
      error: (err) => {
        console.log('Error fetching publications', err);
      }
    });
  }

  // Method to delete a publication by ID
  eliminar(id: number): void {
    if (!id) {
      console.error('Invalid publication ID');
      return;
    }
    this.publicationsService.deletePublication(id).subscribe(
      () => {
        this.mostrarPublications();
      },
      err => {
        console.log('Error deleting publication', err);
      }
    );
  }
}
