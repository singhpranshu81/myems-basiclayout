import { Component } from '@angular/core';
import { User } from 'src/entity/User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userEmail: string | null = '';
  userRole: string | null = '';
  isAdmin: boolean = false;
  isCurrentEmployee: boolean = false;
  user: User = {
    username: '',
    password: '',
    role: '',
  };
  constructor() {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userEmail = this.user.username || null;
    this.userRole = this.user.role || null;

    // Determine if the user is admin or the current employee
    this.isAdmin = this.userRole === 'Admin';
    this.isCurrentEmployee = this.userRole === 'Employee';
  }
}
