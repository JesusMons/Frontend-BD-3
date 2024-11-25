import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserI } from '../models/user'; // Import the UserI interface

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Base URL for the Django API
  api_uri_django = 'http://localhost:8000';
  // Base path for user-related endpoints
  base_path = `${this.api_uri_django}/users/`;

  // Inject the HttpClient service for making HTTP requests
  constructor(private http: HttpClient) { }

  // Method to fetch all users
  getAllUsers(): Observable<UserI[]> {
    return this.http.get<UserI[]>(this.base_path);
  }

  // Method to fetch a single user by ID
  getOneUser(id: number): Observable<UserI> {
    return this.http.get<UserI>(`${this.base_path}${id}`);
  }

  // Method to create a new user
  createUser(data: any): Observable<UserI> {
    return this.http.post<UserI>(this.base_path, data);
  }

  // Method to update an existing user by ID
  updateUser(id: number, data: any): Observable<UserI> {
    return this.http.put<UserI>(`${this.base_path}${id}`, data);
  }

  // Method to delete a user by ID
  deleteUser(id: number): Observable<UserI> {
    return this.http.delete<UserI>(`${this.base_path}${id}`);
  }
}


