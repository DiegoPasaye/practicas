import { Component, OnInit } from '@angular/core';
import { Personajes } from 'src/app/services/personajes';
import { PersonajesFirebase } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from 'src/app/componentes/detalle/detalle.component';

@Component({
  standalone: false,
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  personajesRecientes: PersonajesFirebase[] = [];

  constructor(private servicioPersonajes: Personajes, private modalCtrl: ModalController) { }

  async verDetalle(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id: id
      }
    });
    modal.present();
  }

  ngOnInit() {
    this.servicioPersonajes.getPersonajes().subscribe((res)=> {
      console.log('Personajes: ', res)
      this.personajesRecientes = res as PersonajesFirebase[];
    })
  }
}
