import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userLoginOn:boolean=false;
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.authService.currentUserLoginOn.subscribe(
      {
        next:(userLoginOn) => {
          this.userLoginOn=userLoginOn;
        }
      }
    )
  }

  logout()
  {
    this.authService.logout();
    this.router.navigate(['/inicio'])
  }

}
