import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    RouterModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

