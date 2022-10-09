import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AdRoutingModule } from './ad-routing.module';
import { AdAppComponent } from './ad.app.component';
import { AdListComponent } from './list/ad-list.component';
import { AdCreateComponent } from './create/ad-create.component';
import { AdCreateOptionComponent } from './create/create-option/ad-create-option.component';
import { OwerFormComponent } from './shared/components/form-ower/form-ower.component';
import { AddressFormComponent } from './shared/components/form-address/form-address.component';
import { FormAdComponent } from './shared/components/form-ad/form-ad.component';
import { MissingComponent } from './shared/components/missing/missing.component';
import { FoundComponent } from './shared/components/found/found.component';
import { DonationComponent } from './shared/components/donation/donation.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AdAppComponent,
    AdListComponent,
    AdCreateComponent,
    AdCreateOptionComponent,
    OwerFormComponent,
    AddressFormComponent,
    FormAdComponent,
    MissingComponent,
    FoundComponent,
    DonationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdRoutingModule,
    SharedModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class AdModule {}
