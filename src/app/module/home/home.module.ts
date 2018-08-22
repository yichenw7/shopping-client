import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {ShareModule} from '../../share/share.module';
import {HomeNavComponent} from './home-nav/home-nav.component';
import {HomeRoutingModule} from './home.routing.module';
import {RouterModule} from '@angular/router';
import {NavAccordionModule} from '../common-share/nav-accordion/accordion.module';

@NgModule({
	imports: [
		ShareModule,
		RouterModule,
		HomeRoutingModule,
		NavAccordionModule
	],
	declarations: [HomeComponent, HomeNavComponent]
})
export class HomeModule {
}
