import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl= environment.api

  private http=inject(HttpClient)

 constructor() { }
 loginConNest(credenciales:any){
  return this.http.post<any>(`${this.baseUrl}/auth/login`,credenciales)
 }

 registroConNest(datos:any){
  return this.http.post<any>(`${this.baseUrl}/register`,datos)
 }
 forgotPassword(datos: any): Observable<any> {  
  return this.http.post<any>(`${this.baseUrl}/auth/forgot-password`, datos);
 }

 // auth.service.ts

resetPassword(data: any): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}/auth/reset-password`, data);
}

}
