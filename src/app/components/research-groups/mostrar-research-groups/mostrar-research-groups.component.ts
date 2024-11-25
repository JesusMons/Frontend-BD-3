import { Component, OnInit } from '@angular/core';
import { ResearchGroupI } from '../../../models/research-groups'; // Import the ResearchGroupI interface
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ResearchGroupsService } from '../../../services/research-groups.service'; // Import the ResearchGroupsService

@Component({
  selector: 'app-mostrar-research-groups',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-research-groups.component.html',
  styleUrls: ['./mostrar-research-groups.component.css'] // Ensure it's in plural
})
export class MostrarResearchGroupsComponent implements OnInit {
  public researchGroups: ResearchGroupI[] = [];

  // Constructor to inject the ResearchGroupsService and Router
  constructor(
    private researchGroupsService: ResearchGroupsService,
    private router: Router
  ) {}

  // Lifecycle hook that is called after the component is initialized
  ngOnInit(): void {
    this.mostrarResearchGroups();
  }

  // Method to fetch and display all research groups
  mostrarResearchGroups() {
    this.researchGroupsService.getAllResearchGroups().subscribe({
      next: (data) => {
        this.researchGroups = data;
        // console.log(this.researchGroups)
      },
      error: (err) => {
        console.log('Error fetching research groups', err);
      }
    });
  }

  // Method to delete a research group by ID
  eliminar(id: number): void {
    if (!id) {
      console.error('Invalid research group ID');
      return;
    }
    this.researchGroupsService.deleteResearchGroup(id).subscribe(
      () => {
        this.mostrarResearchGroups();
      },
      err => {
        console.log('Error deleting research group', err);
      }
    );
  }
}
