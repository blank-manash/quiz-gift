import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
const mat = [
  MatToolbarModule,
  MatCardModule,
  MatRippleModule,
  MatListModule,
  MatSnackBarModule,
];

@NgModule({
  imports: [mat],
  exports: [mat],
})
export class MaterialModule {}
