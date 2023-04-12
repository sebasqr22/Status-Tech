import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-agendamiento',
  templateUrl: './agendamiento.component.html',
  styleUrls: ['./agendamiento.component.css']
})
export class AgendamientoComponent {
  url = "https://formspree.io/f/xayzlbzr";
  constructor(private http: HttpClient, private router:Router, private viewportScroller: ViewportScroller) { }
  submitForm  (formData: any) {
    if(formData.name && formData.email && formData.pais && formData.phone && formData.fecha && formData.message){
      this.http.post(this.url, formData).subscribe(response => {
        if(JSON.parse(JSON.stringify(response)).ok == true){
          alert("Información enviada correctamente!")
          this.router.navigate(['/fast_code']);
          this.viewportScroller.scrollToAnchor('top');
        }
        else{
          alert("Ocurrio un error!")
        }
      });
    }
    else{
      alert("Debe llenar todos los campos!")
    }
  }



}
