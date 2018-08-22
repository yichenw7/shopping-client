import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AboutUsComponent} from './main/about-us.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'about-us',
				component: AboutUsComponent,
			},
		])
	],
	exports: [RouterModule]
})

export class AboutUsRoutingModule {
}
