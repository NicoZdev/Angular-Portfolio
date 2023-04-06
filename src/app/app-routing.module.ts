import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTMLmainComponent } from './htmlmain/htmlmain.component';


const routes: Routes = [
  { path: '', component: HTMLmainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
