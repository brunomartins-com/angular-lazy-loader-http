import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [CommonModule, AdminRoutingModule],
  declarations: [AuthComponent]
})
export class AuthModule {}
