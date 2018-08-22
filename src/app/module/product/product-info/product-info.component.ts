import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
	selector: 'app-product-info',
	templateUrl: './product-info.component.html',
	styleUrls: ['./product-info.component.css'],
	encapsulation: ViewEncapsulation.None,
})
export class ProductInfoComponent implements OnInit {
	constructor() {
		console.log('enter Productinfo');
	}

	ngOnInit(): void {
		console.log('ngOnInit Productinfo');
	}

}
