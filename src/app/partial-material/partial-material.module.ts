import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatBadgeModule,
  MatInputModule,
  MatButtonModule,
  MatChipsModule,
  MatToolbarModule,
  MatTableModule
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
    MatToolbarModule,
    MatTableModule
  ]
})
export class PartialMaterialModule {}
