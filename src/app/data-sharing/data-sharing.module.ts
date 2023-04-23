import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataSharingRoutingModule } from './data-sharing-routing.module';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { UsingServicesComponent } from './using-services/using-services.component';
import { UsingSessionComponent } from './using-session/using-session.component';
import { UsingSubjectsComponent } from './using-subjects/using-subjects.component';

import { ChildCompComponent } from './parent-to-child/child-comp/child-comp.component';
import { ChildComp1Component } from './child-to-parent/child-comp1/child-comp1.component';



@NgModule({
  declarations: [
    ParentToChildComponent,
    ChildToParentComponent,
    UsingServicesComponent,
    UsingSessionComponent,
    UsingSubjectsComponent,
  
    ChildCompComponent,
       ChildComp1Component,
    
  ],
  imports: [
    CommonModule,
    DataSharingRoutingModule
  ]
})
export class DataSharingModule { }
