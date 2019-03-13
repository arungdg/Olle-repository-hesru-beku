import { HomeService } from './services/Home.service';
import { LoginService } from './login/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// tslint:disable-next-line:max-line-length
import { MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatOption, MatOptionModule, MatSelectModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { ChartsService } from './services/charts.service';
import { ChartComponent } from './chart/app.chart';

import { ButtonComponent } from './button/button.component';
import { HomeComponent } from './home/home.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ButtonComponent,
    LoginComponent,
    HeaderComponent, FooterComponent, HomeComponent, ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [
   ChartsService, LoginService, HomeService, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, DatePipe
  ],
  bootstrap: [AppComponent],
  exports: [ContainerComponent,
    ButtonComponent, ChartComponent,
     LoginComponent, HeaderComponent, FooterComponent, HomeComponent]
})
export class AppModule { }
