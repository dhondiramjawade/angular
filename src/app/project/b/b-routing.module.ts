import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { B1Component } from './components/b1/b1.component';
import { B2Component } from './components/b2/b2.component';
import { B3Component } from './components/b3/b3.component';


const routes: Routes = [{
  path : "",
  component :B1Component
},{
  path : "b2",
  component : B2Component
},{
  path : "b3",
  component : B3Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BRoutingModule { }
export const BRoutingComponents = [B1Component,B2Component,B3Component]
