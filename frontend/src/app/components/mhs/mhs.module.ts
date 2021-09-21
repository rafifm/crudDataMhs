import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TambahMhsComponent } from './tambah-mhs/tambah-mhs.component';
import { LihatMhsComponent } from './lihat-mhs/lihat-mhs.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    TambahMhsComponent,
    LihatMhsComponent,
  ],
  imports: [
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    CommonModule
  ]
})
export class MhsModule { }
