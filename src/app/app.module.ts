import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeModule } from './prime/prime.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultComponent } from './plantillas/default/default.component';
import { DefaultModule } from './plantillas/default/default.module';
import { PartesModule } from './partes/partes.module';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimeModule,
    DefaultModule,
    PartesModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
