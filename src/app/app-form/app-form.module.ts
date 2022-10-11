import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppFormPageRoutingModule } from './app-form-routing.module';

import { AppFormPage } from './app-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppFormPageRoutingModule
  ],
  declarations: [AppFormPage]
})
export class AppFormPageModule {}
