import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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
  
  deleteCar(id:number):Observable<any>
  {
    const params = new HttpParams().set('id',id.toString());
    return this.http.delete(this.baseUrlAuth+'delete',{params});
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
  
}
