import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FacultyI } from '../models/faculties';// Import the FacultyI interface

@Injectable({
  providedIn: 'root'
})
export class FacultiesService {
  // Base URL for the Django API
  api_uri_django = 'http://127.0.0.1:8000';
  // Base path for faculty-related endpoints
  base_path = `${this.api_uri_django}/programs/faculties/`;

  // Inject the HttpClient service for making HTTP requests
  constructor(private http: HttpClient) { }

  // Method to fetch all faculties
  getAllFaculties(): Observable<FacultyI[]> {
    return this.http.get<FacultyI[]>(this.base_path);
  }

  // Method to fetch a single faculty by ID
  getOneFaculty(id: number): Observable<FacultyI> {
    return this.http.get<FacultyI>(`${this.base_path}${id}`);
  }

  // Method to create a new faculty
  createFaculty(data: any): Observable<FacultyI> {
    return this.http.post<FacultyI>(this.base_path, data);
  }

  // Method to update an existing faculty by ID
  updateFaculty(id: number, data: any): Observable<FacultyI> {
    return this.http.put<FacultyI>(`${this.base_path}${id}`, data);
  }

  // Method to delete a faculty by ID
  deleteFaculty(id: number): Observable<FacultyI> {
    return this.http.delete<FacultyI>(`${this.base_path}${id}`);
  }
}
