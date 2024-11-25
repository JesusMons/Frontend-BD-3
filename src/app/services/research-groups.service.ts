import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResearchGroupI } from '../models/research-groups'; // Import the ResearchGroupI interface

@Injectable({
  providedIn: 'root'
})
export class ResearchGroupsService {
  // Base URL for the Django API
  api_uri_django = 'http://localhost:8000';
  // Base path for research group-related endpoints
  base_path = `${this.api_uri_django}/research-groups/`;

  // Inject the HttpClient service for making HTTP requests
  constructor(private http: HttpClient) { }

  // Method to fetch all research groups
  getAllResearchGroups(): Observable<ResearchGroupI[]> {
    return this.http.get<ResearchGroupI[]>(this.base_path);
  }

  // Method to fetch a single research group by ID
  getOneResearchGroup(id: number): Observable<ResearchGroupI> {
    return this.http.get<ResearchGroupI>(`${this.base_path}${id}`);
  }

  // Method to create a new research group
  createResearchGroup(data: any): Observable<ResearchGroupI> {
    return this.http.post<ResearchGroupI>(this.base_path, data);
  }

  // Method to update an existing research group by ID
  updateResearchGroup(id: number, data: any): Observable<ResearchGroupI> {
    return this.http.put<ResearchGroupI>(`${this.base_path}${id}`, data);
  }

  // Method to delete a research group by ID
  deleteResearchGroup(id: number): Observable<ResearchGroupI> {
    return this.http.delete<ResearchGroupI>(`${this.base_path}${id}`);
  }
}
