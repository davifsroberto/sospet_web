import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './navigation/home/home.component';
import { UnfoundComponent } from './navigation/unfound/unfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  {
    path: 'ad',
    loadChildren: () => import('./ad/ad.module').then(m => m.AdModule),
  },

  { path: 'unfound', component: UnfoundComponent },
  { path: '**', component: UnfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
