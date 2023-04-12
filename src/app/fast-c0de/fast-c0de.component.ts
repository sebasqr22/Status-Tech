import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-fast-c0de',
  templateUrl: './fast-c0de.component.html',
  styleUrls: ['./fast-c0de.component.css']
})
export class FastC0deComponent {
  constructor(private router:Router, private viewportScroller: ViewportScroller) {}
  agendar(){
    this.router.navigate(['/Agendar']);
    this.viewportScroller.scrollToAnchor('top');
  }
}
