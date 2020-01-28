import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components';
import { CommonModule } from '@angular/common';
import { PartialMaterialModule } from '../partial-material/partial-material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TitleService } from './services';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, PartialMaterialModule, RouterModule],
  exports: [PartialMaterialModule, HttpClientModule, FormsModule, RouterModule],
  providers: [TitleService]
})
export class SharedModule {}
