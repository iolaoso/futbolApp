import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, ResponseLogin } from '../interfaces/auth.interface';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiurl = environment.apiUrl;

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  });

  constructor(
    private http: HttpClient
  ) { }

  //local storage
  set token(token: string){
    localStorage.setItem('token', token);
  }

  get token(){
    return localStorage.getItem('token') || '';
  }

  //conexion con la Api
  login(data: Login ): Observable<ResponseLogin>{
    const options = {headers: this.headers};
    return this.http.post<ResponseLogin>(`${this.apiurl}/auth/login`, data, options);
  }
}
