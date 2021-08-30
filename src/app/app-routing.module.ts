import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './info/details/details.component';
import { InfoComponent } from './info/info.component';



import { LoginComponent } from './login/login/login.component';

const routes: Routes = [

  {
    path: '',redirectTo:"login",pathMatch:"full"
  },
  {
    path: 'login',component: LoginComponent
  },

  {
    path: 'details',component: DetailsComponent
  },

  {
    path: 'info',component: InfoComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
