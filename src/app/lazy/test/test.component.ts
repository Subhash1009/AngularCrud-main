import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  animations: [
      trigger('imageAnimation', [
      state('visible', style({ opacity: 1, transform: 'scale(1)' })),
      state('hidden', style({ opacity: 0, transform: 'scale(0)' })),
      transition('visible <=> hidden', animate('1000ms ease-in')),
    ]),
  ],
})
export class TestComponent {
  constructor(private router:Router){}
  isVisible = true;

  // toggleVisibility() {
  //   this.isVisible = !this.isVisible;
  // }

}
