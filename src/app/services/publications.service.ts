import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { PublicationI } from '../models/publications'; // Import the PublicationI interface
import { ResearchGroupSummaryI } from '../models/researchgroupsummary';
import { GroupedPublicationByUserAndResearchGroupI } from '../models/gpublicationuseradnresearch';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  // Base URL for the Django API
  api_uri_django = 'http://localhost:8000';
  // Base path for publication-related endpoints
  base_path = `${this.api_uri_django}/publications/`;

  // Inject the HttpClient service for making HTTP requests
  constructor(private http: HttpClient) { }

  // Method to fetch all publications
  getAllPublications(): Observable<PublicationI[]> {
    return this.http.get<PublicationI[]>(this.base_path);
  }

  // Method to fetch a single publication by ID
  getOnePublication(id: number): Observable<PublicationI> {
    return this.http.get<PublicationI>(`${this.base_path}${id}`);
  }

  // Method to create a new publication
  createPublication(data: any): Observable<PublicationI> {
    return this.http.post<PublicationI>(this.base_path, data);
  }

  // Method to update an existing publication by ID
  updatePublication(id: number, data: any): Observable<PublicationI> {
    return this.http.put<PublicationI>(`${this.base_path}${id}`, data);
  }

  // Method to delete a publication by ID
  deletePublication(id: number): Observable<PublicationI> {
    return this.http.delete<PublicationI>(`${this.base_path}${id}`);
  }

  filterPublications(): Observable<PublicationI[]> {
    //method to filter posts by word and date
    return this.http.get<PublicationI[]>(`${this.api_uri_django}/publications/filter/word-date/`);
  }

  filterPublicationsByDateAndFaculty(): Observable<PublicationI[]> {
    //method to filter posts by year and faculty
    return this.http.get<PublicationI[]>(`${this.api_uri_django}/publications/filter/year-faculty/`);
  }
  
  // Method to obtain publications grouped by research group
  groupPublicationsByResearchGroup(): Observable<ResearchGroupSummaryI[]> {
    return this.http.get<ResearchGroupSummaryI[]>(`${this.api_uri_django}/publications/count/research-group/`);
  }

  // Method to obtain publications grouped by user and research group
  groupPublicationsByUserAndResearchGroup(): Observable<GroupedPublicationByUserAndResearchGroupI[]> {
    return this.http.get<GroupedPublicationByUserAndResearchGroupI[]>(`${this.api_uri_django}/publications/group-by-user-and-research-group/`);
  }
}
