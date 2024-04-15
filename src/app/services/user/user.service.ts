import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { User } from '../auth/user';
import { environment } from '../../environments/environment';
import { UpdateRequest } from '../Requests/updateRequest';
import { UserDTO } from '../../auth/DTO/UserDTO';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getHeaders():HttpHeaders{
    return new HttpHeaders().set('Authorization', "Bearer " + sessionStorage.getItem("token")??"");
  }

  getUser(email:string):Observable<User>{
    let headers = this.getHeaders();
    return this.http.get<User>(environment.urlApi+"user/email/"+email, { headers }).pipe(
      catchError(this.handleError)
    )
  }

  getUsers():Observable<UserDTO[]>{
    let headers = this.getHeaders();
    return this.http.get<UserDTO[]>(environment.urlApi+"users", { headers }).pipe(
      catchError(this.handleError)
    )
  }

  updateUser(updateRequest:UpdateRequest):Observable<any>
  {
    let headers = this.getHeaders();
    return this.http.put(environment.urlApi+"auth", updateRequest, { headers }).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Se ha producio un error ', error.error);
    }
    else{
      console.error('Backend retornó el código de estado ', error.status, error.error);
    }
    return throwError(()=> new Error('Algo falló. Por favor intente nuevamente.'));
  }
}
