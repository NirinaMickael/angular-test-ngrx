import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm !:FormGroup
  constructor(private fb : FormBuilder,private router:Router){
    this.loginForm = this.fb.group({
      password:[''],
      email:[]
    })
  }
  onSubmit(){
    this.router.navigateByUrl('/home')
    console.log("test",this.loginForm.value);
  }
}
