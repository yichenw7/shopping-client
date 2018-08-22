import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'contact-us',
				component: MainComponent,
			},
		])
	],
	exports: [RouterModule]
})

export class ContactUsRoutingModule {
}
