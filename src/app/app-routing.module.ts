import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstMainContentComponent } from './first-main-content/first-main-content.component';
import { UsersComponent } from './users/users.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';

const routes: Routes = [
  // { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
        component: FirstMainContentComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'driver-details',
        component: DriverDetailsComponent
      }
    ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
