import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LihatDsnComponent } from './lihat-dsn/lihat-dsn.component';
import { TambahDsnComponent } from './tambah-dsn/tambah-dsn.component';
const routes: Routes = [
  {
    path: '',
    component:LihatDsnComponent
  },
  {
    path: 'tambahdsn',
    component: TambahDsnComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DsnRoutingModule { }
