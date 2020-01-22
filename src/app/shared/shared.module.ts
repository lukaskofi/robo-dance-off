import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PartialMaterialModule } from '../partial-material/partial-material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    PartialMaterialModule
  ],
  exports: [
    PartialMaterialModule,
    HttpClientModule,
    FormsModule
  ]
})
export class SharedModule { }
