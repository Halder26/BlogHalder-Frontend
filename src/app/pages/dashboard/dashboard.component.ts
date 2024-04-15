import { Component } from '@angular/core';
import { User } from '../../services/auth/user';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  userLoginON: boolean = false;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.currentUserLoginOn.subscribe(
      {
        next: (userLoginON) => {
          this.userLoginON = userLoginON;
        }
      }
    )
  }
}
