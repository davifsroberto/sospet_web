import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdRoutingModule } from './ad-routing.module';
import { AdAppComponent } from './ad.app.component';
import { AdListComponent } from './list/ad-list.component';
import { AdCreateComponent } from './create/ad-create.component';
import { AdCreateOptionComponent } from './create/create-option/ad-create-option.component';

@NgModule({
  declarations: [
    AdAppComponent,
    AdListComponent,
    AdCreateComponent,
    AdCreateOptionComponent,
  ],
  imports: [CommonModule, AdRoutingModule],
})
export class AdModule {}
