import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TictactoeRoutingModule } from './tictactoe-routing.module';
import { TictactoeComponent } from './tictactoe.component';


@NgModule({
  declarations: [
    TictactoeComponent
  ],
  imports: [
    CommonModule,
    TictactoeRoutingModule
  ]
})
export class TictactoeModule { }
