import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from './product/product-list.component';
import {ProductRowComponent} from './product/product-row';
import {PageContainerComponent} from './page/page-container.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NgZorroAntdModule,
	],
	declarations: [ProductListComponent, ProductRowComponent, PageContainerComponent],
	exports: [
		ProductListComponent, ProductRowComponent
		, PageContainerComponent
	]
})
export class CommonComponentsModule {
}
