import { Component } from '@angular/core';

@Component({
  selector: 'people-app',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet> 
  `,
})
export class AppComponent {
  people:any[]

  title = 'people-app';

  
}
