import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './containers/form-page/form-page.component';
import { TablePageComponent } from './containers/table-page/table-page.component';

const routes: Routes = [
  {path:'',component:FormPageComponent},
  {path:'table',component:TablePageComponent},

  
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
