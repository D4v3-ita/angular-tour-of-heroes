// quando si inizializza una variabile nuova bisogna implementarla nell'import
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-product-alerts',
	templateUrl: './product-alerts.component.html',
	styleUrls: ['./product-alerts.component.css']
})

// come se fosse una classe astratta (importante segnare la riga 18-19)
export class ProductAlertsComponent implements OnInit {
	// dichiarazione variabile input product (vedi riga 1)
	@Input() product: any;

	// dichiarazione variabile output notify (vedi riga 4)
	@Output() notify = new EventEmitter();

	constructor() { }

	// una specie di metodo vuoto, anche se non serve, bisogna dichiararla
	ngOnInit(): void {
	}

}
