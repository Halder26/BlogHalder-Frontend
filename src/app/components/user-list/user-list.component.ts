import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { UserDTO } from '../../auth/DTO/UserDTO';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users:UserDTO[]=[];
  errorMessage:String="";
  constructor(private userService:UserService) {
  }
  getAllUsers(){
    this.userService.getUsers().subscribe(
      {
        next: (usersFromDB) => {
          this.users = usersFromDB;
        },
        error: (error) => {
          this.errorMessage = error;
        }
      }
    )
  }

  ngOnInit(): void {
    this.getAllUsers();
  }
}
