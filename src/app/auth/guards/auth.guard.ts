import { CanActivateChildFn, Router } from '@angular/router';
import { AuthApiService } from '../service/auth-api.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  const authServices = inject(AuthApiService);
  const router =inject(Router);
  if(authServices.isAuth())
    {
      console.log("entro en el guard")
      return true;
    }else{
      router.navigate(['/auth/'])
      return false;
    }
};
