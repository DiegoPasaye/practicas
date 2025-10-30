import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {
  @Input() titulo = 'Nosotros'

  constructor() { }

  ngOnInit() {
  }

}
