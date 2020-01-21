import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatBadgeModule,
  MatInputModule,
  MatButtonModule,
  MatChipsModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  exports: [
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatToolbarModule
  ],
})
export class PartialMaterialModule {}
