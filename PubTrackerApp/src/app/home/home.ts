import { Component, signal } from '@angular/core';
import { Greeter } from '../components/greeter/greeter';

@Component({
  imports: [Greeter],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  homeMessage = signal('Welcome to PubTrackerApp!');
  keyUpHandler() {
    console.log('user typed something');
  }
}
