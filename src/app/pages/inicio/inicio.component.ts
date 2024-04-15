import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
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
