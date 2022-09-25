import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http"; 
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import localeUk from '@angular/common/locales/uk';

import { IncrementPipe } from './pipes';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './moduls/components/users/users.component';
import { UserRoutingModule } from './moduls/user/user-routing.module';
import { UserComponent } from './moduls/components/user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './components/test/test.component';


registerLocaleData(localeRu, 'ru');
registerLocaleData(localeUk, 'uk');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru'},
    {provide: LOCALE_ID, useValue: 'uk'},
    IncrementPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
