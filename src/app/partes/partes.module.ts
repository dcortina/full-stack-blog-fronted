import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PrimeModule } from '../prime/prime.module';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent
  ]
})
export class PartesModule { }
