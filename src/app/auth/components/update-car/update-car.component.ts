import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthApiService } from '../../service/auth-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent {
  carUpdate!:FormGroup;
  id_number= -1;
  selectionOptionSetring:string = "";

  constructor(
    private services:AuthApiService,
    private router:Router,
    private fb: FormBuilder
  ){}

  ngOnInit():void
  {

  }
  createForm()
  {
    this.carUpdate = this.fb.group({
      
    })
  }
  onSubmit():void
  {

  }
  backToCar()
  {
    this.router.navigateByUrl('auth/vehicle');
  }
  
}
