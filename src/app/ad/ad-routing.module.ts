import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdAppComponent } from './ad.app.component';
import { AdCreateComponent } from './create/ad-create.component';
import { AdCreateOptionComponent } from './create/create-option/ad-create-option.component';
import { AdListComponent } from './list/ad-list.component';

const adRoutingConfig: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: '', component: AdAppComponent },

      {
        path: 'list',
        component: AdListComponent,
      },

      {
        path: 'create-option',
        component: AdCreateOptionComponent,
      },

      {
        path: 'create',
        component: AdCreateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(adRoutingConfig)],
  exports: [RouterModule],
})
export class AdRoutingModule {}
