import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { ServicesModule } from '../../shared/services/services.module';
import { SharedModule } from '../../shared/shared.module';
import { ErasureCodeProfileFormComponent } from './erasure-code-profile-form/erasure-code-profile-form.component';
import { PoolFormComponent } from './pool-form/pool-form.component';
import { PoolListComponent } from './pool-list/pool-list.component';

@NgModule({
  imports: [
    CommonModule,
    TabsModule,
    PopoverModule.forRoot(),
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    BsDropdownModule,
    ServicesModule
  ],
  exports: [PoolListComponent, PoolFormComponent],
  declarations: [PoolListComponent, PoolFormComponent, ErasureCodeProfileFormComponent],
  entryComponents: [ErasureCodeProfileFormComponent]
})
export class PoolModule {}
