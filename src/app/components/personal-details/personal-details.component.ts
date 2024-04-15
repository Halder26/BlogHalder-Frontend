import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../services/auth/user';
import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user/user.service';
import { environment } from '../../environments/environment';
import { UpdateRequest } from '../../services/Requests/updateRequest';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent  {
  errorMessage:String="";
  user?:User;
  userLoginOn:boolean=false;
  editMode:boolean=false;

  updateForm=this.formBuilder.group({
    name:['', Validators.required],
    country:['',Validators.required],
  })

  constructor(private userService:UserService, private formBuilder:FormBuilder, private authService:AuthService  ){
    this.userService.getUser(authService.getEmailFromToken()).subscribe({
      next: (userData) => {
        this.user=userData;
        this.updateForm.controls.name.setValue( userData.name);
        this.updateForm.controls.country.setValue( userData.country);
      },
      error: (errorData) => {
        this.errorMessage=errorData
      },
      complete: () => {
        console.info("Se han obtenido los datos del usuario correctamente.");
      }
    })

    this.authService.userLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
      }
    })
    
  }

  setName(name:string)
  {
    if(this.user)
      {
        this.user.name=name;
      }
  }

  setCountry(country:string)
  {
    if(this.user)
      {
        this.user.country=country;
      }
  }

  get name()
  {
    return this.updateForm.controls.name;
  }

  get country()
  {
    return this.updateForm.controls.country;
  }

  savePersonalDetailsData()
  {
    if (this.updateForm.valid)
    {
      let updateUser = new UpdateRequest(this.updateForm.controls.name.value??'', this.updateForm.controls.country.value??'', this.user?.email ?? '')
      this.userService.updateUser(updateUser).subscribe({
        next:() => {
          this.editMode=false;
          this.setName(this.updateForm.controls.name.value??'');
          this.setCountry(this.updateForm.controls.country.value??'');
        },
        error:(errorData)=> console.error(errorData)
      })
    }
  }

}
