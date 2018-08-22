import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'home',
				component: HomeComponent,
				// children: [
				// 	{
				// 		path: 'area',
				// 		loadChildren: './home-area/home-area.module#HomeAreaModule'
				// 		// label       : '更新日志'
				// 	},
				// 	{
				// 		path: '**',
				// 		loadChildren: '../product/product.module#ProductModule',
				// 	}
				// ]
			},
		])
	],
	exports: [RouterModule]
})

export class HomeRoutingModule {
}
