import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  firstname:any = " not available";
  lastname:any  = " not available";
  middle:any  = " not available";
  address:any  = " not available";
  email:any  = " not available";
  phone:any  = " not available";
  height:any  = " not available";
  weight:any  = " not available";
  Userlist: any;
  view:boolean = false;
  displaytable:boolean = true;
  viewlist: any;
  country: any= " not available";
  state: any= " not available";
  ZipCode: any= " not available";



  constructor(public details:CountryService, private router:Router) { }

  ngOnInit(): void {
    this.details.setdetails().subscribe(data=>{
      this.Userlist = data;
      // console.log(data);
      
      // console.log(this.Userlist);
      

    });
 


  }

  public viewdata(id:number){
    this.displaytable = false;
    this.view = true;
    this.details.GetViewData(id).subscribe(res =>{
      this.viewlist = res;
      this.firstname   = this.viewlist.FirstName;
      this.lastname  = this.viewlist.LastName;
      this.middle  = this.viewlist.MiddleName;
      this.address  = this.viewlist.Address;
      this.email  = this.viewlist.Email;
      this.phone  = this.viewlist.PhoneNumber;
      this.country  = this.viewlist.Country;
      this.state  = this.viewlist.State;
      this.height  = this.viewlist.Height;
      this.weight  = this.viewlist.Weight;
      this.ZipCode = this.viewlist.ZipCode;

      console.log(this.viewlist);
      
    })
  }
  public back(){
    this.displaytable = true;
    this.view = false;
  }
  public Create(){
    console.log("ghjk");
    
    this.router.navigate(['/details'])
  }
  public Deleteid(id:number){
    this.details.Deleteid(id).subscribe(data=>{
      if(data == 200){
        this.details.setdetails().subscribe(data=>{
          this.Userlist = data;

        });
        alert(" Deleted Sucessfully ")
      }
      
    })
      
  }

}
