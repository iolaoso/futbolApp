import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // crea las rutas por modulos de la app
  {
    path            :   'auth',
    loadChildren    : () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path            :   'futbolista',
    loadChildren    : () => import('./futbolista/futbolista.module').then( m => m.FutbolistaModule )
  },
  {
    path            : '**',
    redirectTo      : 'futbolista'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
