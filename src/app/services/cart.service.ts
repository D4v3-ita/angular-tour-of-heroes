import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor() { }

  addToCart(product) {
    this.items.push(product);
    // log della variabile items di questa classe
    console.log(this.items);

    // calcoliamo il totale dei prezzi degli articoli comprati
    let total = 0;

    this.items.forEach(item => total+= item.price);
    console.log('Costo totale: ' + total);


  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
