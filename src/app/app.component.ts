import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router, private viewportScroller: ViewportScroller) {}
  title = 'status';
  estado = false
  
  home(){
    this.router.navigate(['/']);
    this.viewportScroller.scrollToAnchor('top');
  }
  
  fastC0de(){
    this.router.navigate(['/Fast-C0de']);
    this.viewportScroller.scrollToAnchor('top');
  }
  
  contacto(){
    this.router.navigate(['/Contacto']);
    this.viewportScroller.scrollToAnchor('top');
  }

  agendar(){
    this.router.navigate(['/Agendar']);
    this.viewportScroller.scrollToAnchor('top');
  }
  
  
  mostrarMenu(){
    const menu = document.getElementById('navbarSupportedContent') as HTMLInputElement
    if(this.estado){
      menu.className = 'collapse navbar-collapse'
    }else{
      menu.className = 'navbar-collapse'
    }
    this.estado = !this.estado
  }
}
