import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutUsComponent} from './main/about-us.component';
import {AboutUsRoutingModule} from './about-us.routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		AboutUsRoutingModule
	],
	declarations: [AboutUsComponent]
})
export class AboutUsModule {
}
