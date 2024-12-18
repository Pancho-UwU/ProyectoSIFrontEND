import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from '../../service/auth-api.service';
import { entities } from 'src/app/interface/car';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  addCar!:FormGroup;
  selectOpcion: string= '';
  error: boolean= false;
  errorMessages:string[]=[];
  constructor(private router: Router,
    private fb:FormBuilder,
    private authApiServ: AuthApiService
  ){}
  ngOnInit():void{
    this.createForm();
  }
  createForm()
  {
    this.addCar = this.fb.group({
      Name: ['',[Validators.required]],
      CodeVehicle: ['',[Validators.required,Validators.maxLength(4),Validators.minLength(4)]],
      LowPrice: ['',[Validators.required]],
      AirExtra: ['',[Validators.required]],
      TimesRented: 0,
    })
  }
  onSubmit():void
  {
    if(this.addCar.invalid)
      {
        return;
      }
    try
    {
      const response = this.authApiServ.createCar(this.addCar);
      if(response)console.log("Vehiculo creado", response);
      else console.log("Vehiculo no creado",response)
      this.error=false;
      this.errorMessages=[];
      console.log("Petición finish");
      this.router.navigateByUrl('auth/vehicle');
    }catch(error:any)
    {
      if(error.status ===0)
        {
          this.error = true;
          this.errorMessages.push("Error con la conxeción");
          console.log(error,"EERROORR XD");
          return;
        }

    }finally
    {
      this.addCar.reset();
    } 
  }
  
  backToCarList()
  {
    this.router.navigateByUrl('/auth/vehicle');
  }
}
