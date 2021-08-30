import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CountryService } from 'src/app/country.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

able:any;
  // submit: boolean = false;

 formG:FormGroup;
  Userlsit: any;
  constructor(public formbuilder:FormBuilder,public Countryservice:CountryService, private router:Router) { 
    this.formG = this.formbuilder.group({
      username:["",Validators.required],
      password:["",Validators.required]
    });
  }

  ngOnInit(): void {
  //   if (this.formG.controls.username.value == ""){
  //     this.able = false
  //   }
  //   else if(this.formG.controls.username.value == !""){
  //     this.able = true
  //   }
    
  //   // this.formG.value.username = "gfgfg"
  // console.log(this.formG.controls.username.value);
  
    
  }
 

 login(){
   if(this.formG.invalid){
    //  this.submit = true;
     console.log("form invlid");
     
     
   }else{
    // this.submit = false;

    // this.Countryservice.getusername(0).subscribe(data=>{
    //   console.log(this.formG.value);
    //   console.log("fcgdfdg");
      
      
    //   // this.Userlsit = data;
    // });
    console.log("username in frontend====="+this.formG.value.username);
    var ff =  `["${this.formG.value.username}","${this.formG.value.password}"]`
    // this.formG.value.password

    this.Countryservice.getusername(this.formG.value).subscribe(data =>{
      // this.formG.value.username
      // this.formG.value.password
 alert("login successful")
setTimeout(() => {
  this.router.navigate(['/details'])
}, 2000);
      

    })
   }
  //  console.log(this.submit);
   
   
 }

}
