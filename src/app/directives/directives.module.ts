import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives.component';
import { StructuralComponent } from './structural/structural.component';
import { AttributeComponent } from './attribute/attribute.component';
import { ComponentComponent } from './component/component.component';
import { CustomeComponent } from './custome/custome.component';



@NgModule({
  declarations: [
    DirectivesComponent,
    StructuralComponent,
    AttributeComponent,
    ComponentComponent,
    CustomeComponent
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }
