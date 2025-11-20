import { Injectable, inject, EnvironmentInjector, runInInjectionContext } from '@angular/core'; // Importamos EnvironmentInjector y runInInjectionContext
import { HttpClient } from '@angular/common/http';
import { RespuestaBD, RespuestaDetalle } from '../interfaces/interfaces';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class Personajes {
  private injector = inject(EnvironmentInjector);

  constructor(private http: HttpClient, private firestore: Firestore) {}

  getDatos() {
    return this.http.get<RespuestaBD>('https://practicaangular-bc58e-default-rtdb.firebaseio.com/.json');
  }

  getDatosById(id: number) {
    return this.http.get<RespuestaDetalle>(`https://practicaangular-bc58e-default-rtdb.firebaseio.com/.json/${id}`);
  }

  getPersonajes() {
    return runInInjectionContext(this.injector, () => {
      const personajesRef = collection(this.firestore, 'personajes');
      return collectionData(personajesRef, { idField: 'id' });
    });
  }

  getPersonajesDetalle(id: string) {
    return runInInjectionContext(this.injector, () => {
      const personajesRef = doc(this.firestore, 'personajes', id);
      return docData(personajesRef, { idField: 'id' });
    });
  }
}
