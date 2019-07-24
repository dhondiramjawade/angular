import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A1Component } from './components/a1/a1.component';
import { A2Component } from './components/a2/a2.component';
import { A3Component } from './components/a3/a3.component';

const routes: Routes = [{
  path : "" ,
  component : A1Component
},{
  path :"a2",
  component : A2Component
},{
  path :"a3",
  component : A3Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ARoutingModule { }
export const AroutedComponents = [A1Component, A2Component, A3Component] 
