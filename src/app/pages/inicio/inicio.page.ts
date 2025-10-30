import { Component, OnInit } from '@angular/core';
import { Personajes } from 'src/app/services/personajes';
// Importa InfGeneral aquí
import { Personajes as PersonajesApi, RespuestaBD, InfGeneral } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from 'src/app/componentes/detalle/detalle.component';

@Component({
  standalone: false, // Lo dejamos como lo tenías
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  personajesRecientes: PersonajesApi[] = [];
  supportInfo: InfGeneral | null = null; // 1. Añade esta variable

  constructor(private servicioPersonajes: Personajes, private modalCtrl: ModalController) { }

  async verDetalle(id: number) { // 2. Se mantiene (id: number)

    // 3. Busca el personaje en el array que ya tienes
    const personajeSeleccionado = this.personajesRecientes.find(p => p.id === id);

    // 4. (Opcional pero recomendado) Maneja si no se encuentra
    if (!personajeSeleccionado) {
      console.error('No se encontró el personaje con id:', id);
      return;
    }

    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        // 5. Pasa el objeto 'personaje' encontrado y 'supportInfo'
        personaje: personajeSeleccionado,
        supportInfo: this.supportInfo
      }
    });
    modal.present();
  }

  ngOnInit() {
    this.servicioPersonajes.getDatos().subscribe((resp: RespuestaBD) => {
      console.log('Personajes: ', resp);
      this.personajesRecientes = resp.data;
      this.supportInfo = resp.support; // 6. Guarda la info de support
    });
  }
}
