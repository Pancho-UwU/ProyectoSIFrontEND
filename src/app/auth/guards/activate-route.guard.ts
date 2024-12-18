import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { AuthApiService } from '../service/auth-api.service';

export const activateRouteGuard: CanActivateFn = (route, state) => {
  const authServices = inject(AuthApiService);
  const router =inject(Router);
  if(authServices.isAuth())
    {
      console.log("entro en el guard")

      return true;
    }else{
      router.navigate(['/'])
      return false;
    }
  
};
