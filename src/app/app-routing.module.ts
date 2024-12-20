import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './form/login-form/login-form.component';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path:'',
  component:LoginFormComponent,
  pathMatch: 'full'
},
{
  path:'auth', 
  loadChildren: () =>
    import('./auth/auth.module').then((m) => m.AuthModule),
},

{
  path:'**',
  redirectTo:''
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
