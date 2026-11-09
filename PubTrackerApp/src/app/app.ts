import { Component, NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Main } from './main/main';


@Component({
  imports: [RouterOutlet, Header, Main],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  schemas: [NO_ERRORS_SCHEMA],
})
export class App {
  protected readonly title = signal('PubTrackerApp');
}
