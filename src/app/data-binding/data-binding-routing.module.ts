import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeComponent } from './attribute/attribute.component';
import { EventComponent } from './event/event.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyComponent } from './property/property.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { DataBindingComponent } from './data-binding.component';

const routes: Routes = [
  {
    path:'',
    component:DataBindingComponent,
    children:[  
      {path: '', redirectTo:'', pathMatch:"full"},
      {path:'atrribute',component:AttributeComponent},
      {path:'event',component:EventComponent },
      {path:'interpolation',component:InterpolationComponent},
      {path:'property', component:PropertyComponent},
      {path:'two-way',component:TwoWayBindingComponent}
 ],   
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataBindingRoutingModule { }
