import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HanoiComponent } from './hanoi/hanoi.component';

import { LoginComponent } from './login/login.component';
import { TowerHanoiComponent } from './tower-hanoi/tower-hanoi.component';


const routes: Routes = [
  { path:"", component: TowerHanoiComponent},
  { path : "login" , component: LoginComponent },

  { path:"hanoi", component: HanoiComponent}, //canActivate: [AuthGuard]},

  { path:"tower-hanoi", component: TowerHanoiComponent}, //canActivate: [AuthGuard]},
  { path:"tower-hanoi/:nbDisk", component: TowerHanoiComponent} //canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
