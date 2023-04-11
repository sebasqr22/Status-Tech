import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router) {}
  title = 'status';
  estado = false
  
  home(){
    this.router.navigate(['/']);
  }
  
  fastC0de(){
    this.router.navigate(['/Fast-C0de']);
  }
  
  contacto(){
    this.router.navigate(['/Contacto']);
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
