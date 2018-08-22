import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../core/entity/Product';
@Component({
	selector: 'com-product-row',
	template: `
		<div class="products-row">
			<h2>{{rowTitle}}</h2>
			<div class="view-all">
				<a (click)="goToViewAll">View All</a>
			</div>
			<ng-content></ng-content>
		</div>
	`
})
export class ProductRowComponent implements OnInit {
	@Input() rowTitle: string;
	@Input() viewUrl: string;
	@Input() rowList: Product[];
	constructor() {
	}

	ngOnInit() {
	}
	goToViewAll() {
		console.log('%c ==========打印 开始==============', 'color:red');
		console.log('goToViewAll', this.viewUrl);
		console.log('%c  =========打印 结束===============', 'color:red');
	}
}
