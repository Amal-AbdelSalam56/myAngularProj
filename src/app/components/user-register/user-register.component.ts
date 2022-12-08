import { Iuser } from './../../models/iuser';
import { UserApiService } from './../../Services/user-api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  userFormGroup:FormGroup;
  newUser:Iuser = {} as Iuser;

  constructor(private formBuilder:FormBuilder, private router: Router, private userApi: UserApiService) {
    
    this.userFormGroup=this.formBuilder.group({
      fullName: ['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.email,Validators.required]],
      mobileNo: formBuilder.array([formBuilder.control('',[Validators.required,Validators.minLength(5)])]),
      address:this.formBuilder.group({
        city:['',[Validators.required]],
        PostalCode:['',[Validators.required,Validators.minLength(5)]],
        street:['',[Validators.required]]
      }),
      password:['',[Validators.required,Validators.minLength(6)]],
      referral:[''],
      referralOther:['']

    })
  }

get fullName(){
  return this.userFormGroup.get('fullName');
}
get mobileNo(){
  return this.userFormGroup.get('mobileNo') as FormArray;
}
get email(){
  return this.userFormGroup.get('email') ;
}
get city(){
  return this.userFormGroup.get('city') ;
}
get PostalCode(){
  return this.userFormGroup.get('PostalCode') ;
}
get street(){
  return this.userFormGroup.get('street') ;
}
get password(){
  return this.userFormGroup.get('password') ;
}
get referral()
{
  return this.userFormGroup.get('referral');
}
get referralOther(){
  return this.userFormGroup.get('referralOther')
}

updateRefValidation(){
  if(this.referral?.value=='Specificdays')
  {
    this.userFormGroup.get('referralOther')?.addValidators([Validators.required]);
  }
  else{ 
    this.userFormGroup.get('referralOther')?.clearValidators();
  }
  this.userFormGroup.get("referralOther")?.updateValueAndValidity();
}
addMobileInp(){
  this.mobileNo.push(this.formBuilder.control(''));
}

deleteMobileInp(){
 this.mobileNo.controls.pop();
}

  ngOnInit(): void {
  }

  register(){
    this.userApi.addNewUser(this.newUser).subscribe({
      next:(user)=>{
        this.router.navigate(['/Product']);
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

}
