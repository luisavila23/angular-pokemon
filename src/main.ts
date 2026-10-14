import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Dashboard } from './app/dashboard/dashboard';

@Component({
  selector: 'app-root',
  template: ``,
})
export class App {
  name = 'Angular';
  counter = signal(0);
}

bootstrapApplication(Dashboard);
