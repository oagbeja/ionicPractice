import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
    },
    { title: 'Roster', url: '/roster', icon: 'people' },
    { title: 'AppForm', url: '/app-form', icon: 'people' },
  ];

  constructor() {}
}
