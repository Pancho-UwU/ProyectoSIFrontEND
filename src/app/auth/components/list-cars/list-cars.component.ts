import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Car, entities } from 'src/app/interface/car';
import { AuthApiService } from '../../service/auth-api.service';
import { Router } from '@angular/router';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent {
  cars:entities[]=[];
  isLoading = true;
  query:string = '';
  
  constructor(
    private apiService:AuthApiService,
    private fb:FormBuilder,
    private router:Router
  ) {}
  ngOnInit(){
    this.loadCars();
    console.log(this.cars,"holaa")
  }
  loadCars():void
  {
    this.isLoading = true;
    this.apiService.getsCars().subscribe({
      next:(data)=>{
        console.log(data)
        this.cars =data;
        console.log(this.cars,"entro");
        this.isLoading =false;
      
      },error:(err) =>{
        console.log("Error al cargar datos",err);
        this.isLoading = false;
      }
    }
  )
  }
  deleteCar(id:number):void
  {
    if(confirm('¿Estas seguro de eliminar el vehiculo?'))
      {
        this.apiService.deleteCar(id).subscribe({
          next:()=>this.loadCars(),
          error:(err)=>console.error('Error al eliminar dato',err),
        })
      }
  }
  onSubmit()
  {
    if(this.query.trim()===''){
      this.loadCars();
    }else{
      this.cars = this.cars.filter((car)=>
      car.codeVehicle.toLowerCase().includes(this.query.toLowerCase())||
      car.name.toLocaleLowerCase().includes(this.query.toLowerCase())
    );
    }
  }
  goToCreateCar()
  {
    this.router.navigateByUrl('auth/vehicle/add');
  }
  backToHome()
  {
    this.router.navigateByUrl('auth')
  }
}
