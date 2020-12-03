import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { DashboardComponent } from './Components/Pages/dashboard/dashboard.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { Grafica1Component } from './Components/Pages/grafica1/grafica1.component';
import { ProgressComponent } from './Components/Pages/progress/progress.component';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';


const routes: Routes = [
  { path:'dashboard',component:DashboardComponent},
  { path:'Login',component:LoginComponent},
  { path:'register',component:RegisterComponent},
  { path:'progress',component:ProgressComponent},
  { path:'grafica1', component:Grafica1Component}
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
exports:[ RouterModule]

})
export class ApproutingModule { }
