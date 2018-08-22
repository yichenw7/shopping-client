import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BaseconfigComponent} from './baseconfig.component';

const routes: Routes = [
	{
		path: 'baseconfig',
		component: BaseconfigComponent,
		children: [
			{
				path: 'area',
				loadChildren: './area/area.module#AreaModule'
			},
			{
				path: '**',
				loadChildren: '../product/product.module#ProductModule',
			}
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BaseconfigRoutingModule {
}
