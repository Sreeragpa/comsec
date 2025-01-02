import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule,InputTextModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!:FormGroup
  private fb = inject(FormBuilder)
  private cdrf = inject(ChangeDetectorRef)
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
    })
  }


  onlogin(){

    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      
    }else{
      this.loginForm.markAllAsTouched()
    }
  }
}
