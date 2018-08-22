import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {ContactUsRoutingModule} from './contact-us.routing.module';

@NgModule({
	imports: [
		CommonModule,
		ContactUsRoutingModule
	],
	declarations: [MainComponent]
})
export class ContactUsModule {
}
