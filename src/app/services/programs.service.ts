import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProgramI } from '../models/programs'; // Import the ProgramI interface

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  // Base URL for the Django API
  api_uri_django = 'http://localhost:8000';
  // Base path for program-related endpoints
  base_path = `${this.api_uri_django}/programs/`;

  // Inject the HttpClient service for making HTTP requests
  constructor(private http: HttpClient) { }

  // Method to fetch all programs
  getAllPrograms(): Observable<ProgramI[]> {
    return this.http.get<ProgramI[]>(this.base_path);
  }

  // Method to fetch a single program by ID
  getOneProgram(id: number): Observable<ProgramI> {
    return this.http.get<ProgramI>(`${this.base_path}${id}`);
  }

  // Method to create a new program
  createProgram(data: any): Observable<ProgramI> {
    return this.http.post<ProgramI>(this.base_path, data);
  }

  // Method to update an existing program by ID
  updateProgram(id: number, data: any): Observable<ProgramI> {
    return this.http.put<ProgramI>(`${this.base_path}${id}`, data);
  }

  // Method to delete a program by ID
  deleteProgram(id: number): Observable<ProgramI> {
    return this.http.delete<ProgramI>(`${this.base_path}${id}`);
  }
}
