import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="title">Angular Lazy Loader Http</h1>
    <nav>
      <a routerLink="/" routerLinkActive="active">Home</a>
      <a routerLink="/dash" routerLinkActive="active">Dash</a>
      <a routerLink="/auth" routerLinkActive="active">Auth</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
