import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CoronaService } from './shared/corona.service';
import { DistrictComponent } from './district/district.component';
import { HelpfulLinksComponent } from './helpful-links/helpful-links.component';
import { FAQComponent } from './faq/faq.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DistrictComponent,
    HelpfulLinksComponent,
    FAQComponent,
    NavBarComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CoronaService],
  bootstrap: [AppComponent]
})
export class AppModule { }