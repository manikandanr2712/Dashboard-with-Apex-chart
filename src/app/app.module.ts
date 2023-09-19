import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './shared/authconfig.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstMainContentComponent } from './first-main-content/first-main-content.component';
import { UsersComponent } from './users/users.component';
import { DashboardChartComponent } from './dashboard-chart/dashboard-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FooterComponent } from './footer/footer.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FirstMainContentComponent,
    UsersComponent,
    DashboardChartComponent,
    FooterComponent,
    DriverDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgApexchartsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
