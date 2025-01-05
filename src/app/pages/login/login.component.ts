import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../core/services/auth.service';
import { errorMessages } from '../../constant';

@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule,InputTextModule,ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!:FormGroup
  private fb = inject(FormBuilder)
  private cdrf = inject(ChangeDetectorRef)
  private authService = inject(AuthService)

  errorMessage: string = ""
  emailError: string = ""
  passwordError: string = ""
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required])
    })
  }


  onlogin(){

    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.resetErrors()
      this.authService.login(this.loginForm.value).subscribe({
        next:(res)=>{
          console.log(res);
          
        },
        error:(err)=>{
          if(err.error.status == 400){
            console.log("INVLAID USER",err.error);
            console.log(errorMessages.INVALID_EMAIL,"testst");
            if(err.error.message = errorMessages.INVALID_EMAIL){
              this.emailError = err.error.message
            }else if(err.error.message = errorMessages.INVALID_PASSWORD){
              this.passwordError = err.error.message
            }
          }
        }
      })

      
    }else{
      this.loginForm.markAllAsTouched()
    }
  }

  resetErrors(){
    this.emailError = ""
    this.passwordError = ""
  }
}
