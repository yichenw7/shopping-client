import {Injectable} from '@angular/core';
import {PageResult, ResponseResult} from '../../core/respone/result/ResponseResult';
import {HomeProducts} from '../../core/respone/HomeProducts';
import {HomeProductListApi, ProductBriefApi, ProductListApi} from './mock-strorage/product/product-api';
import {ProductListParam} from '../../core/request/product';
import {Product} from '../../core/entity/Product';
import {ProductType} from '../../core/entity/productType';

@Injectable()
export class ProductService {

	constructor() {

	}

	getHomeProductList(): Promise<ResponseResult<HomeProducts[]>> {
		console.log('%c ==========打印 开始==============', 'color:red');
		console.log(HomeProductListApi);
		console.log('%c  =========打印 结束===============', 'color:red');
		return Promise.resolve(HomeProductListApi);
	}
	getProduct(params: ProductListParam): Promise<ResponseResult<PageResult<Product>>> {
		return Promise.resolve(ProductListApi);
	}
	getAuthorizationHeader(): string {
		return 'd06c70b3f2a847508f43b754517e05e4&&fds_10.0.8.44_10016';
	}
	getBrief(): Promise<ResponseResult<ProductType>> {
		return  Promise.resolve(ProductBriefApi);
	}
}
