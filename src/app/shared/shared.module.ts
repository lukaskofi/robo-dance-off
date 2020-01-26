import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PartialMaterialModule } from '../partial-material/partial-material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TitleService } from './services/title.service';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, PartialMaterialModule, RouterModule],
  exports: [PartialMaterialModule, HttpClientModule, FormsModule],
  providers: [TitleService]
})
export class SharedModule {}
