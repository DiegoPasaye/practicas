import { Component, Input } from '@angular/core';
import { Detalle as PersonajeDetalle, InfGeneral } from 'src/app/interfaces/interfaces';
import { ModalController, IonicModule } from '@ionic/angular'; // 1. Importa IonicModule
import { CommonModule } from '@angular/common'; // 2. Importa CommonModule

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
  standalone: true, // 3. Asegúrate que diga 'true'
  imports: [IonicModule, CommonModule] // 4. AÑADE ESTE ARRAY 'imports'
})
export class DetalleComponent {

  @Input() personaje: PersonajeDetalle | null = null;
  @Input() supportInfo: InfGeneral | null = null;

  constructor(private modalCtrl: ModalController) { }

  regresar() {
    this.modalCtrl.dismiss();
  }
}
