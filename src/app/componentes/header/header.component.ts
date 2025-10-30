import { Component, Input, OnInit } from '@angular/core';

interface Elemento{
  icono: string;
  nombre: string;
  ruta: string;
}

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  elementos: Elemento[] = [
    {
      icono: 'newspaper-outline',
      nombre: 'Noticias',
      ruta: '/noticias'
    },
    {
      icono: 'newspaper-outline',
      nombre: 'Nosotros',
      ruta: '/nosotros'
    },
    {
      icono: 'newspaper-outline',
      nombre: 'Componentes',
      ruta: '/componentes'
    },
  ]
  @Input() titulo="noticias"

  constructor() { }

  ngOnInit() {}

}
