import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { 
    path: 'mhs', 
    loadChildren: () => import('./components/mhs/mhs.module').then(m => m.MhsModule)
  },{ 
    path: 'dsn', 
    loadChildren: () => import('./components/dsn/dsn.module').then(m => m.DsnModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
