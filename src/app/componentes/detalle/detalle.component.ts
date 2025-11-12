import { Component, Input } from '@angular/core';
import { Detalle as PersonajeDetalle, InfGeneral, PersonajesFirebase } from 'src/app/interfaces/interfaces';
import { ModalController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Personajes } from 'src/app/services/personajes';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class DetalleComponent {
  detallePersonaje= {} as PersonajesFirebase;
  @Input() id: string = '';


  constructor(private modalCtrl: ModalController, private servicioPersonajes: Personajes) { }

  regresar() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
     this.servicioPersonajes.getPersonajesDetalle(this.id).subscribe(res => {
       this.detallePersonaje=<PersonajesFirebase>res;
     })
   }
}
