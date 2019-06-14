import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators, AbstractControl } from '@angular/forms';
import { Key } from 'protractor'
//....cross field validation....
function verifyEmail(c:AbstractControl):{[key:string]:boolean} | null{
  let emailcontrol=c.get('emailControl');
  let confirmEmailcontrol=c.get('confirmEmailControl');
  console.log('verify email');
  if(emailcontrol.value==confirmEmailcontrol.value){
    return null;
  }
  else{
    return{
      emailconfirmation:true
    }
  }
  }

  //....rating validation....
function ratingValidator(min,max){
  return function ratingcheck(c:AbstractControl):{[key:string]:boolean} | null{
    if(c.value>=min && c.value<=max){
      return null;
}
    else {
      return{
ratinginvalid:true
      }
    }
  }
}

  //...phone length validation....
function phoneLengthValidation (c:AbstractControl):{[key:string]:boolean} | null{
  if( c.value.toString().length == 10 ){
    return null;
  }else{
    return {
      match:true
    }
  }
}
//.....code for phone numbers and length custom validation ........
//function ssnValidator(control:AbstractControl): {[key: string]: any} {
  //const value: string = control.value || '';
  //const valid = value.match(/^\d{9}$/);
  //return valid ? null : {ssn: true};
//}

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  customerInfo:FormGroup

  constructor() { }

  ngOnInit() {
    this.customerInfo=new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName:new FormControl('',Validators.required),
      emailGroup: new FormGroup({
        emailControl: new FormControl('',[Validators.required,Validators.email]),
        confirmEmailControl: new FormControl('',[Validators.required,Validators.email]),
      },verifyEmail),
      checkIn:new FormControl('true'),
      //phoneControl:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]*$")])
     phoneControl:new FormControl('',phoneLengthValidation),    
    // phoneControl:new FormControl('',ssnValidator)
   //rating:new FormControl('',[Validators.required,Validators.min(1),Validators.max(5),Validators.pattern("^[1-5]$")]) 
  rating:new FormControl('',ratingValidator(1,5)),
  notification:new FormControl('')
})

  }
  sendData(){
    console.log(this.customerInfo);
  }
 setNotification(notify:string){
   let phone=this.customerInfo.get('phoneControl');
  if(notify=='phone'){
   phone.setValidators([Validators.required,phoneLengthValidation]);
   }else{
    phone.clearValidators();
   }
   phone.updateValueAndValidity();

  //let email=this.customerInfo.get('emailGroup');
   //if(notify=='email'){
    //email.setValidators([Validators.required,Validators.email]);
  //}else{
   //email.clearValidators();
   //}
   //email.updateValueAndValidity();
  

}

}
