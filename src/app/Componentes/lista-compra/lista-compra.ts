import { Component, OnInit } from '@angular/core';
import {ServicioDeAutentService} from '../../servicio-de-autent.service';
import {FireDBService} from '../../fire-db.service';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.html',
  styleUrls: ['./lista-compra.scss']
})
export class ListaProductos implements OnInit {

  productos: any[];
  // creo un array llamado productos; en él creo cada uno de los productos, con sus datos.
  // estos productos serán los que se mostrarán.
  constructor(public dbProd: FireDBService,
              public authComponent: ServicioDeAutentService) {
    const prod1 = {
      nombre: 'Pan',
      descripcion: 'Pan de masa madre hecho artesanalmente.',
      img: 'assets/image/bread.png',
      comprado: false
    };
    const prod2 = {
      nombre: 'Pescado',
      descripcion: 'Pescado procedente de mares gallegos. Disponible en diferentes variedades.',
      img: 'assets/image/fish-food.png',
      comprado: false
    };
    const prod3 = {
      nombre: 'Carne',
      descripcion: 'Carne de cerdo, vaca...',
      img: 'assets/image/crab.png',
      comprado: false
    };
    const prod4 = {
      nombre: 'Huevos',
      descripcion: 'Huevos de gallinas camperas.',
      img: 'assets/image/thanksgiving.png',
      comprado: false
    };
    const prod5 = {
      nombre: 'Café',
      descripcion: 'Café procedente de Colombia.',
      img: 'assets/image/milk-bottle.png',
      comprado: false
    };
    const prod6 = {
      nombre: 'Leche',
      descripcion: 'Leche de vaca, procedente de Galicia.',
      img: 'assets/image/yogurt.png',
      comprado: false
    };
    const prod7 = {
      nombre: 'Queso',
      descripcion: 'Queso de cabra',
      img: 'assets/image/cheese.png',
      comprado: false
    };
    const prod8 = {
      nombre: 'Manzanas',
      descripcion: 'Manzanas golden',
      img: 'assets/image/honey.png',
      comprado: false
    };
    const prod9 = {
      nombre: 'Chocolate',
      descripcion: 'Chocolate con leche',
      img: 'assets/image/carrot.png',
      comprado: false
    };
    const prod10 = {
      nombre: 'Miel',
      descripcion: 'Miel de abejas',
      img: 'assets/image/strawberry.png',
      comprado: false
    };
    const prod11 = {
      nombre: 'Cerveza',
      descripcion: 'Estrella Galicia',
      img: 'assets/image/tomato.png',
      comprado: false
    };
    const prod12 = {
      nombre: 'Zanahorias',
      descripcion: 'Dos kilos de zanahorias',
      img: 'assets/image/mushroom.png',
      comprado: false
    };
    this.productos = [];
    this.productos.push(prod1);
    this.productos.push(prod2);
    this.productos.push(prod3);
    this.productos.push(prod4);
    this.productos.push(prod5);
    this.productos.push(prod6);
    this.productos.push(prod7);
    this.productos.push(prod8);
    this.productos.push(prod9);
    this.productos.push(prod10);
    this.productos.push(prod11);
    this.productos.push(prod12);
  }

  seleccionarCompra(userMail: string, userUid: string, index) {
    // EN VARIAS LINEAS
    /*
    if (this.productos[index].comprado) {
      this.productos[index].comprado = false;
    } else {
      this.productos[index].comprado = true;
    }
     */
    // EN UNA LINEA
    this.productos[index].comprado = !this.productos[index].comprado;
    this.dbProd.guardarProds(userMail, userUid, this.productos[index].nombre, this.productos[index].comprado);
  }

  ngOnInit() {
  }
}
