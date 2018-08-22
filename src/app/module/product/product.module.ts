import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './product.component';
import {ProductRoutingModule} from './product.routing.module';
import {HeroService} from '../../service/hero.service';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductInfoComponent} from './product-info/product-info.component';
import {CommonComponentsModule} from '../../components/components.module';

@NgModule({
	imports: [
		CommonModule,
		ProductRoutingModule,
		CommonComponentsModule
	],
	declarations: [ProductComponent, ProductListComponent, ProductInfoComponent],
	// entryComponents: [ProductDetailComponent]
	exports: [ProductListComponent, ProductInfoComponent],

	providers: [HeroService],
})
export class ProductModule {
}
