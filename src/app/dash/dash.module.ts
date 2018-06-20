import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashComponent } from './dash.component';

import { DashRoutingModule } from './dash-routing.module';

@NgModule({
  imports: [CommonModule, DashRoutingModule],
  declarations: [DashComponent]
})
export class DashModule {}
