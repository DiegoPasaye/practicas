import { Component, OnInit } from '@angular/core';
import { Personajes } from 'src/app/services/personajes';
// 1. Importa solo la interfaz que usas
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

  // 2. Tipado correcto
  personajesRecientes: PersonajesFirebase[] = [];

  // 3. Borra propiedades que no se usan en esta página
  // detallePersonaje = {} as PersonajesFirebase;
  // supportInfo: InfGeneral | null = null;

  constructor(private servicioPersonajes: Personajes, private modalCtrl: ModalController) { }

  async verDetalle(id: string) {
    // 4. Correcto: Esta función solo pasa el ID
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
      // 5. El 'as' debe coincidir con el tipo de 'personajesRecientes'
      this.personajesRecientes = res as PersonajesFirebase[];
    })
  }
}
