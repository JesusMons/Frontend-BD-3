import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResearchGroupI } from '../models/research-groups'; // Import the ResearchGroupI interface
import { GroupUsersByResearchGroupI } from '../models/groupuserresearch'; // Import the GroupUsersByResearchGroupI interface

@Injectable({
  providedIn: 'root' // Makes the service available throughout the app
})
export class ResearchGroupsService {
  // Base URL for the Django API
  api_uri_django = 'http://localhost:8000';
  // Base path for research group-related endpoints
  base_path = `${this.api_uri_django}/research-groups/`;

  // Inject the HttpClient service for making HTTP requests
  constructor(private http: HttpClient) { }

  /**
   * Fetch all research groups
   * @returns Observable containing an array of ResearchGroupI objects
   */
  getAllResearchGroups(): Observable<ResearchGroupI[]> {
    return this.http.get<ResearchGroupI[]>(this.base_path);
  }

  /**
   * Fetch a single research group by its ID
   * @param id - ID of the research group
   * @returns Observable containing a single ResearchGroupI object
   */
  getOneResearchGroup(id: number): Observable<ResearchGroupI> {
    return this.http.get<ResearchGroupI>(`${this.base_path}${id}`);
  }

  /**
   * Create a new research group
   * @param data - Data object containing the new research group's details
   * @returns Observable containing the newly created ResearchGroupI object
   */
  createResearchGroup(data: any): Observable<ResearchGroupI> {
    return this.http.post<ResearchGroupI>(this.base_path, data);
  }

  /**
   * Update an existing research group by its ID
   * @param id - ID of the research group to update
   * @param data - Data object containing updated details
   * @returns Observable containing the updated ResearchGroupI object
   */
  updateResearchGroup(id: number, data: any): Observable<ResearchGroupI> {
    return this.http.put<ResearchGroupI>(`${this.base_path}${id}`, data);
  }

  /**
   * Delete a research group by its ID
   * @param id - ID of the research group to delete
   * @returns Observable containing the deleted ResearchGroupI object
   */
  deleteResearchGroup(id: number): Observable<ResearchGroupI> {
    return this.http.delete<ResearchGroupI>(`${this.base_path}${id}`);
  }

  /**
   * Fetch research groups filtered by keywords related to technology
   * @returns Observable containing an array of filtered ResearchGroupI objects
   */
  filterResearchGroupsByTechnology(): Observable<ResearchGroupI[]> {
    return this.http.get<ResearchGroupI[]>(`${this.api_uri_django}/research-groups/filter/key-word/`);
  }

  /**
   * Fetch users grouped by research groups with filters applied
   * @returns Observable containing an array of GroupUsersByResearchGroupI objects
   */
  filterUsersByResearchGroup(): Observable<GroupUsersByResearchGroupI[]> {
    return this.http.get<GroupUsersByResearchGroupI[]>(`${this.api_uri_django}/users/group-by-research-group-filtered/`);
  }
}
