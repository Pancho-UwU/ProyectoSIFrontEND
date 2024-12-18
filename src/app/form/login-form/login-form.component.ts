import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  forms!: FormGroup;
  error: boolean =false;
  errorMessages: string[] = [];
  constructor(private fb:FormBuilder,private apiServices:ApiService,private router:Router){}
  ngOnInit():void
  {
    console.log("hola")
    this.createForm();
  }
  createForm()
  {
    this.forms= this.fb.group({
      Rut:['',[Validators.required]],
      PasswordEntered:['',[Validators.required]]
    })
  }
  async onSubmit()
  {
    if(this.forms.invalid)return;
    try
    {
      const response = await this.apiServices.login(this.forms);
      if(response) console.log("Inicio de sesión");
      else console.log("Usuario no inicio sesión");
      this.error = false;
      this.errorMessages = [];
      console.log('Perición finalizada');
      this.router.navigateByUrl('auth')
    }catch(error:any)
    {
      if(error.status == 0)
        {
          this.error = true;
          this.errorMessages.push("Error en la conección con el servidor.");
          console.log("error xd",error);
          return;
        }
    }finally
    {
      this.forms.reset();
      
    }
  };
  get RuInvalid()
  {
    return this.forms.get('Rut')?.invalid && this.forms.get('Rut')?.touched; 
  }
  get PasswordInvalid()
  {
    return this.forms.get('PasswordEntered')?.invalid && this.forms.get('PasswordEntered')?.touched; 

  }


}
