import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-componentes',
  templateUrl: './componentes.page.html',
  styleUrls: ['./componentes.page.scss'],
})
export class ComponentesPage implements OnInit {
  @Input() titulo = 'Componentes'

  constructor() { }

  ngOnInit() {
  }

}
