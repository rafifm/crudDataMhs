import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahMhsComponent } from './tambah-mhs/tambah-mhs.component';
import { LihatMhsComponent } from './lihat-mhs/lihat-mhs.component';

const routes: Routes = [
  {
    path: '',
    component:LihatMhsComponent
  },
  {
    path: 'tambahmhs',
    component: TambahMhsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MhsRoutingModule { }
