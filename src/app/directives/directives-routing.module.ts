import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives.component';
import { AttributeComponent } from './attribute/attribute.component';
import { ComponentComponent } from './component/component.component';
import { CustomeComponent } from './custome/custome.component';
import { StructuralComponent } from './structural/structural.component';

const routes: Routes = [
  {
    path:'',
    component:DirectivesComponent,
    children:[  
      {path:'structural',component:StructuralComponent},
      {path:'attribute',component:AttributeComponent },
      {path:'component',component:ComponentComponent},
      {path:'custom', component:CustomeComponent},
      
 ],   
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
