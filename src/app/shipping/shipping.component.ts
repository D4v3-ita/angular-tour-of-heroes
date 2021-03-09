import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Price } from '../models/price';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts: Price[] = [];
  // è true perché c'è ancora il delay, pertanto gli stampo il messaggio ...
  // ... scritto in shipping.component.html
  waiting = true;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    let observable: Observable<Price[]> = this.cartService.getShippingPrices();

    // quello che ci arriva dal server
    observable.pipe(delay(2000)).subscribe(response => {
      console.log(response);
      this.shippingCosts = response;

      // è false perché il delay è finito, pertanto stampo i dati ...
      // ... scritto in shipping.component.html
      this.waiting = false;
    });

  }

}
