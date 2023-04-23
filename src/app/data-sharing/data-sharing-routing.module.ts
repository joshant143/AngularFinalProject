import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from '../data-binding/data-binding.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { UsingServicesComponent } from './using-services/using-services.component';
import { UsingSessionComponent } from './using-session/using-session.component';
import { UsingSubjectsComponent } from './using-subjects/using-subjects.component';

const routes: Routes = [
  {
    path:'',
    component:DataBindingComponent,
    children:[  
      {path:'parenttochild',component:ParentToChildComponent},
      {path:'childtoparen',component:ChildToParentComponent },
      {path:'using-services',component:UsingServicesComponent},
      {path:'using-session', component:UsingSessionComponent},
      {path:'using-subjects',component:UsingSubjectsComponent}
 ],   
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataSharingRoutingModule { }
