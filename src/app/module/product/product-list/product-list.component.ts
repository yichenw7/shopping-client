import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {ProductListParam} from '../../../../core/request/product';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PageResult, ResponseResult} from '../../../../core/respone/result/ResponseResult';
import {Product} from '../../../../core/entity/Product';
import {ProductType} from '../../../../core/entity/productType';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css'],
	encapsulation: ViewEncapsulation.None,
	providers: [ProductService]
})
export class ProductListComponent implements OnInit {
	@Input() type: string;
	pageParams: ProductListParam;
	total = 0;
	pageDataList: Product[];
	sortType: string;
	productBrief: ProductType;
	constructor(private router: Router,
				private activeRoute: ActivatedRoute,
				private productService: ProductService) {
	}

	ngOnInit(): void {
		this.pageParams = {
			pageIndex: 1,
			pageSize: 10,
			type: this.type
		};
		this.productService.getProduct(this.pageParams)
			.then((resp: ResponseResult<PageResult<Product>>) => {
				this.pageDataList = resp.data.result;
				this.total = resp.data.total;
			});
		this.productService.getBrief()
			.then((resp: ResponseResult<ProductType>) => {
				this.productBrief = resp.data;
			});
	}
	// 分页切换
	goPage(pageIndex: number) {
		console.log('%c ==========goPage 打印 开始==============', 'color:red');
		console.log(pageIndex);
		console.log('%c  =========打印 结束===============', 'color:red');
	}
	sortBy(sortType: string) {
		console.log('%c ==========sortBy 打印 开始==============', 'color:red');
		console.log(sortType);
		console.log('%c  =========打印 结束===============', 'color:red');
	}
}
