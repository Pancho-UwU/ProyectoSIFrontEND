import { Injectable } from '@angular/core';
import { ResponseApi } from '../interface/response-api';
import { firstValueFrom } from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { AuthApiService } from '../auth/service/auth-api.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private baseUrl ="http://localhost:5032/api/";

  constructor(private http:HttpClient,private authServices:AuthApiService) { }
  async login (form:any): Promise<ResponseApi>
  {
    try
    {
      const data = await firstValueFrom(this.http.post<ResponseApi>(this.baseUrl+'authenticate',form.value));
      if(data.token)
        {
          console.log(data.token.toString())
          this.authServices.setToken(data.token.toString());
        }
        return Promise.resolve(data);
    }catch(error:any)
    {
        let e =error as HttpErrorResponse;
        return Promise.reject(error);
    }
    
  }
}
