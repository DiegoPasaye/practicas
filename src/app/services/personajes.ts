import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { RespuestaBD, RespuestaDetalle } from '../interfaces/interfaces';
import {Firestore, collection, collectionData, doc, docData} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class Personajes {
  constructor(private http:HttpClient, private firestore:Firestore){}

  getDatos(){
    return this.http.get<RespuestaBD>('https://practicaangular-bc58e-default-rtdb.firebaseio.com/.json')
  }
  // getDatos(){
  //   return this.http.get<RespuestaBD>('https://reqres.in/api/users', {headers:{'x-api-key':'reqres-free-v1'}})
  // }
  getDatosById(id: number){
    return this.http.get<RespuestaDetalle>(`https://practicaangular-bc58e-default-rtdb.firebaseio.com/.json/${id}`)
  }
}
