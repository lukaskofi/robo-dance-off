import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PartialMaterialModule } from '../partial-material/partial-material.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    PartialMaterialModule
  ],
  exports: [
    PartialMaterialModule,
    HttpClientModule
  ]
})
export class SharedModule { }
