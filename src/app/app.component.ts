import { Component } from '@angular/core';
import { Router } from '@angular/router'

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
