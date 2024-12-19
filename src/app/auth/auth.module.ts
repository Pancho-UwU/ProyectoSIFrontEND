import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { HomeComponent } from './page/home/home.component';
import { ListCarsComponent } from './components/list-cars/list-cars.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListRentComponent } from './components/list-rent/list-rent.component';
import { UpdateCarComponent } from './components/update-car/update-car.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { AddRentComponent } from './components/add-rent/add-rent.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListCarsComponent,
    ListRentComponent,
    UpdateCarComponent,
    AddCarComponent,
    AddRentComponent
   
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
