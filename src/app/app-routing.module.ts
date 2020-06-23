import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistreComponent } from './components/registre/registre.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';


const routes: Routes = [
  { path: 'registre', component: RegistreComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardGuard]
})
export class AppRoutingModule { }
