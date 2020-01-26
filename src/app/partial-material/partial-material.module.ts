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
  MatTableModule,
  MatProgressSpinnerModule
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
    MatTableModule,
    MatProgressSpinnerModule
  ]
})
export class PartialMaterialModule {}
