import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PrimeModule } from '../prime/prime.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PrimeModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class PartesModule { }
