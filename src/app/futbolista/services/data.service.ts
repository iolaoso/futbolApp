import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { AuthService } from '../../auth/services/auth.service';
import { Observable } from 'rxjs';
import { ResponseFutbolista, ResponseShowFutbolista } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  token: string = '';
  apiurl = environment.apiUrl;




  constructor(
    private http: HttpClient,
    private authservice: AuthService,
  ) {
    this.token = this.authservice.token;
  }


  getHeaders(token: string ){
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-token': token
    });
  }

  listFutbolistas (): Observable<ResponseFutbolista>{
    const options = {headers: this.getHeaders(this.token)};
    return this.http.get<ResponseFutbolista>(`${this.apiurl}/futbolista`, options);
  }

  showFutbolistas (uid: string ): Observable<ResponseShowFutbolista>{
    const options = {headers: this.getHeaders(this.token)};
    return this.http.get<ResponseShowFutbolista>(`${this.apiurl}/futbolista/${uid}`, options);
  }


}
