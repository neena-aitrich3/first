import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminLoginService } from '../../services/admin-login.service';
import { AdminLogin } from '../../model/admin-login';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  adminLogin !:FormGroup;
  title='formvalidation';
  submitted=false;
  email:any;
  adminLoginModel=new AdminLogin();
  username:string=""
  password:string=""
  loginStatus: boolean = false;
  token:any;
  constructor(private formBuilder:FormBuilder,private loginService:AdminLoginService,private route:Router){}

  ngOnInit()
  {
    this.adminLogin=this.formBuilder.group(
      {
        email:['',Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
        password:['',Validators.required]
      }

      
      
    )
  }


  async onSubmit()
  {
    console.log(this.f);
    this.submitted=true;
    if(this.adminLogin.invalid)
    {
      return
    }
    this.username=this.adminLogin.value.email;
    this.password=this.adminLogin.value.password;

    console.log(this.username);

    this.loginStatus=await this.loginService.adminLogin(this.username,this.password)
    console.log(this.loginStatus);
    if(this.loginStatus)
    {
      this.token=sessionStorage.getItem('token');
      if(this.token)
      {
      this.redirect();
      }
    }
    else{
      alert("invalid user");
    }
  
  }

  redirect()
      {
        
          this.route.navigate(["/dashboard"]).then(()=> {
            window.location.reload();
          });
        }

  get f()
  {
    return this.adminLogin.controls;
  }
 }
