import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResultComponent} from './result/result.component';
import {SearchFieldComponent} from './search-field/search-field.component';

const routes: Routes = [
    {path: '', component: SearchFieldComponent},
    {path: 'view', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
