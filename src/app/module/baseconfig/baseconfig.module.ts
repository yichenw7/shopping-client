import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BaseconfigRoutingModule} from './baseconfig-routing.module';
import {BaseconfigComponent} from './baseconfig.component';
import {CommonShareModule} from '../common-share/common-share.module';

@NgModule({
	imports: [
		CommonModule,
		BaseconfigRoutingModule,
		CommonShareModule
	],
	declarations: [BaseconfigComponent]
})
export class BaseconfigModule {
}
