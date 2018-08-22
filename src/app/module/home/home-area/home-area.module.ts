import {NgModule} from '@angular/core';
import {ShareModule} from '../../../share/share.module';
import {HomeAreaComponent} from './home-area.component';
import {HomeAreaRoutingModule} from './home-area.routing.module';
import {CommonShareModule} from '../../common-share/common-share.module';

@NgModule({
	imports: [
		ShareModule,
		HomeAreaRoutingModule,
		CommonShareModule
	],
	declarations: [HomeAreaComponent]
})
export class HomeAreaModule {
}
