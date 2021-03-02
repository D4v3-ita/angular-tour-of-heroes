import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // any vuol dire oggetto qualsiasi
  product: any;

  // DEPENDENCY INJECTION:
  // hai bisogno della classe , basta solamente dichiararla dentro ...
  // ... i parametri del costruttore
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Prende il productId dalla route corrente
    const routeParams = this.route.snapshot.paramMap;
    const id: string = routeParams.get('productId');
    const productIdFromRoute : number = Number(id);

    // Trova il prodotto che ha l'id che corrisponde a quello che ...
    // ... si trova nella route (in productIdFromRoute)
    this.product = products.find(product => product.id === productIdFromRoute);
  }

}
