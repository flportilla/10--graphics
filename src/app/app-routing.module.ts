import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'graphics',
    loadChildren: () => import('./graphics/graphics.module')
      .then(module => module.GraphicsModule)
  },
  {
    path: '**',
    redirectTo: 'graphics'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
