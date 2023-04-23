import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { DataBindingRoutingModule } from './data-binding-routing.module';
import { AttributeComponent } from './attribute/attribute.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyComponent } from './property/property.component';
import { EventComponent } from './event/event.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    DataBindingComponent,
    AttributeComponent,
    InterpolationComponent,
    PropertyComponent,
    EventComponent,
    TwoWayBindingComponent,
  ],
  imports: [
    CommonModule,
    DataBindingRoutingModule,
    FormsModule 
  ]
})
export class DataBindingModule { }
