import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { authGuard } from './guards/auth.guard';
import { ListCarsComponent } from './components/list-cars/list-cars.component';
import { AddCarComponent } from './components/add-car/add-car.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent,
  canActivate:[authGuard],
  pathMatch:'full'
},
{
  path:'vehicle/add',
  component:AddCarComponent,
  canActivate:[authGuard],
  pathMatch:'full'
},
{
  path:'vehicle',
  component:ListCarsComponent,
  canActivate:[authGuard],
  pathMatch:'full'
},
{
  path:'**',
  redirectTo:'auth'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
