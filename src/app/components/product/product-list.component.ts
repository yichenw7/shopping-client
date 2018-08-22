import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Product} from '../../../core/entity/Product';

@Component({
	selector: 'com-product-list',
	template: `
		<ul class="cf" *ngIf="list">
			<li *ngFor="let productInfo of list">
			<div class="title">
				<a >
					{{productInfo.name}}
				</a>
			</div>
			<div class="pro-img">
				<a href="https://www.cuff-daddy.com/american-buffalo-nickel-cufflinks.html">
					<img
					[src]="productInfo.imgUrl"
					width="170" height="170" border="0" hspace="0" vspace="0"
					[alt]="productInfo.name">
				</a>
			</div>
			<div *ngIf = "hasListPrice" class="cf">
				<div class="list-price">List Price<br><span>{{'$'+ productInfo.listPrice}}</span></div>
				<div class="our-price">Our Price<br><span>{{'$'+ productInfo.price}}</span></div>
			</div>
			<div  *ngIf = "!hasListPrice" class="price">Price<br><span>{{'$'+ productInfo.price}}</span></div>
			<div class="button">
				<a class="pixie">Buy Now</a>
			</div>
		</li>
		</ul>
	`,
	encapsulation: ViewEncapsulation.None,
})
export class ProductListComponent implements OnInit {
	@Input() list: Product[];
	@Input() hasListPrice = false;
	constructor() {
	}

	ngOnInit() {
	}
}
