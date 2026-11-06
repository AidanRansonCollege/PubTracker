import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-greeter',
  styleUrl: './greeter.css',
  templateUrl: './greeter.html',
})
export class Greeter {
  message = input('Default Greeting');
}
