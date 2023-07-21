import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';




@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule, MatIconModule, MatToolbarModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
