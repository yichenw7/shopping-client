import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {ResponseResult} from '../../../../core/respone/result/ResponseResult';
import {HomeProducts} from '../../../../core/respone/HomeProducts';

@Component({
	selector: 'app-home-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css'],
	encapsulation: ViewEncapsulation.None,
	providers: [ProductService]
})
export class MainComponent implements OnInit {
	productRowList: HomeProducts[];
	constructor(private productService: ProductService) {
	}

	ngOnInit() {
		this.productService.getHomeProductList()
			.then((resp: ResponseResult<HomeProducts[]>) => {
				debugger;
				this.productRowList = resp.data;
			});
	}

}
