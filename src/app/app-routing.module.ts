import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { PmComponent } from './components/pm/pm.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
 { path: 'home', component: HomeComponent },
 { path: 'user', component: UserComponent},
 { path: 'pm', component: PmComponent },
 { path: 'admin', component: AdminComponent },
 { path: 'auth/login', component: LoginComponent },
 
 // otherwise redirect to profile
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
