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
  MatProgressSpinnerModule,
  MatSnackBarModule
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
    MatProgressSpinnerModule,
    MatSnackBarModule
  ]
})
export class PartialMaterialModule {}
