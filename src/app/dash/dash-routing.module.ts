import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashComponent } from './dash.component';

import { AuthGuard } from '../auth-guard.service';

const adminRoutes: Routes = [
  {
    path: '',
    component: DashComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class DashRoutingModule {}
