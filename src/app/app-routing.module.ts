import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HooksComponent } from './others/hooks/hooks.component';
import { AuthguardComponent } from './others/authguard/authguard.component';
import { HomeComponent } from './home/home.component';
import { FakeApiComponent } from './others/fake-api/fake-api.component';

const routes: Routes = [
  {
    path: 'data-binding',
    loadChildren: () =>
      import('./data-binding/data-binding.module').then((m) => m.DataBindingModule)
  },
  {
    path: 'data-sharing',
    loadChildren: () =>
      import('./data-sharing/data-sharing.module').then((m) => m.DataSharingModule)
  },

  {
    path: 'directives',
    loadChildren: () =>
      import('./directives/directives.module').then((m) => m.DirectivesModule)
  },
  
 
  {
    path: 'hooks',
    component: HooksComponent
  },
  {
    path: 'authguard',
    component: AuthguardComponent
  },
  {
    path:'fake_api',
    component:FakeApiComponent
  },

  { path: "", component: HomeComponent },
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "**", redirectTo: "", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
