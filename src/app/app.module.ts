import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { ConfigService } from './services/config.service';
import { TowerHanoiComponent } from './tower-hanoi/tower-hanoi.component';
import { HanoiComponent } from './hanoi/hanoi.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TowerHanoiComponent,
    HanoiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ConfigService],
  bootstrap:[AppComponent]
})
export class AppModule { }
