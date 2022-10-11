import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppFormPage } from './app-form.page';

const routes: Routes = [
  {
    path: '',
    component: AppFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppFormPageRoutingModule {}
