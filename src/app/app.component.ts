import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  elementos = [
    {
      nombre:'Inicio',
      ruta:'/inicio',
      icono: 'home-outline'
    },
    {
      nombre:'Componentes',
      ruta:'/componentes',
      icono: 'grid-outline'
    },
    {
      nombre:'Nosotros',
      ruta:'/nostros',
      icono: 'people-outline'
    },
  ]
  constructor() {}
}
