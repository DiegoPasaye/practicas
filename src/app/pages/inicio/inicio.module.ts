import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { DetalleComponent } from 'src/app/componentes/detalle/detalle.component'; // 1. Importa el modal

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    DetalleComponent // 2. Añádelo a 'imports'
  ],
  declarations: [InicioPage] // 3. InicioPage se queda aquí (es standalone: false)
})
export class InicioPageModule {}
