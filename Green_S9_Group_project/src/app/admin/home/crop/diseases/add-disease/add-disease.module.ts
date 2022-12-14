import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { AddDiseasePageRoutingModule } from './add-disease-routing.module';

import { AddDiseasePage } from './add-disease.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDiseasePageRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [AddDiseasePage]
})
export class AddDiseasePageModule {}
