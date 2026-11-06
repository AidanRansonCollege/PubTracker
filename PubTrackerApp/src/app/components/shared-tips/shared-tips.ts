import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-shared-tips',
  styleUrl: './shared-tips.css',
  templateUrl: './shared-tips.html',
})
export class SharedTips {


  Submit(tipAmount: string) {
    console.log("Submit button clicked", tipAmount);
  }
}
