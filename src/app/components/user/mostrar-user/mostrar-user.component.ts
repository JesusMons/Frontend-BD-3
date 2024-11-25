import { Component, OnInit } from '@angular/core';
import { UserI } from '../../../models/user'; // Import the UserI interface
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { UserService } from '../../../services/user.service'; // Import the UserService

@Component({
  selector: 'app-mostrar-user',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-user.component.html',
  styleUrls: ['./mostrar-user.component.css'] // Ensure it's in plural
})
export class MostrarUserComponent implements OnInit {
  public users: UserI[] = [];

  // Constructor to inject the UserService and Router
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  // Lifecycle hook that is called after the component is initialized
  ngOnInit(): void {
    this.mostrarUsers();
  }

  // Method to fetch and display all users
  mostrarUsers() {
    this.userService.getAllUsers()
      .subscribe({
        next: (data) => {
          this.users = data;
          // console.log(this.users)
        }
      });
  }

  // Method to delete a user by ID
  eliminar(id: number): void {
    this.router.navigateByUrl('/user');
    this.userService.deleteUser(id).subscribe(
      () => {
        // this.messageService.add({severity:'warn', summary: 'Notification', detail: 'User Deleted', life:5000});
        this.mostrarUsers();
      },
      err => {
        console.log('error');
        this.router.navigateByUrl('/user');
      }
    );
  }
}
