import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.html',
  styleUrls: ['./compra.scss']
})
export class StoreList implements OnInit {

  compra: any;

  constructor() {
    this.compra = {
      titulo: 'Titulo del Producto',
      cuerpo: `Descripción del producto`,
      precio: `Precio del producto`
    }
  }

  ngOnInit() {
  }

}
