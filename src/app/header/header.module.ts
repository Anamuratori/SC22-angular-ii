import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MenuComponent } from './menu/menu.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';





@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule

  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
