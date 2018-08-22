import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductComponent} from './product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductInfoComponent} from './product-info/product-info.component';

@NgModule({
	imports: [RouterModule.forChild([
		// {path: '', component: ProductComponent},
		{path: 'product-list', component: ProductListComponent},
		{path: 'product-info', component: ProductInfoComponent},
	])],
	exports: [RouterModule]
})

export class ProductRoutingModule {
}
