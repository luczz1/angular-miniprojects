import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TictactoeComponent } from './tictactoe.component';

const routes: Routes = [{ path: '', component: TictactoeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TictactoeRoutingModule { }
