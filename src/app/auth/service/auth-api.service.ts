import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Car, createcar, entities } from 'src/app/interface/car';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  
  private baseUrlAuth: string = 'http://localhost:5032/api/';
  private tokenkey: string ="tokenKey";
  constructor(private http:HttpClient) { }
  
  getsCars():Observable<entities[]>{
    return this.http.get<Car>(this.baseUrlAuth+'vehicle/all').pipe(map((data)=>data.entities));
  }
  createCar(createCar:any):Observable<entities>
  {
    return this.http.post<entities>(this.baseUrlAuth+'vehicle/create',createCar);
  }

  deleteCar(id: number): Observable<any> {
    const url = `${this.baseUrlAuth}/delete/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError)
    );
  }
  setToken(token:string)
  {
    localStorage.setItem(this.tokenkey,token);
  }
  getToken():string |null
  {
    return localStorage.getItem(this.tokenkey);
  }
  isAuth():boolean
  {
    const token = this.getToken();
    return token !== null;
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      // Lógica para manejar el error 404 (no encontrado)
      return throwError('Vehicle not found');
    }
    return throwError('Something went wrong');
  }
}
