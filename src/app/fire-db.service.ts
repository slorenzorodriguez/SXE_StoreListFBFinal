import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FireDBService {

  constructor(public db: AngularFireDatabase) {
  }

  altausuario(usuarioNuevoCorreo: string, usuarioNuevoUID: string) {
    this.db.object('users/userUID/' + usuarioNuevoUID.toString()).update({correo: usuarioNuevoCorreo});
    console.log('Insertado uid');
  }

  bajausuario(uidBorrar: string) {
    // borra entrada
    this.db.object('users/userUID/' + uidBorrar).remove();
  }

  guardarProds(usuarioNuevoCorreo: string, usuarioNuevoUID: string, nomProd: string, comprado: boolean) {
    this.db.object('users/userUID/' + usuarioNuevoUID.toString() + '/correo').update({
      correo: usuarioNuevoCorreo
    });

    this.db.object('users/userUID/' + usuarioNuevoUID.toString() + '/productos').update({
      [nomProd]: comprado
    });
  }
}
