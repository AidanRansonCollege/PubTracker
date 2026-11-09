import { Component } from '@angular/core';
import { SharedTips } from '../components/shared-tips/shared-tips';
import { User } from '../components/classes/user';

@Component({
  imports: [SharedTips],
  selector: 'app-main',
  styleUrl: './main.css',
  templateUrl: './main.html',
})
export class Main {
  
}
