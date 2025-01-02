import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private http = inject(HttpClient);
  private baseUrl: string = environment.baseURL;
  
  login(data:any):Observable<any>{
    return this.http.post(`${this.baseUrl}user/login`,data)
  }

  logout(){

  }

}
