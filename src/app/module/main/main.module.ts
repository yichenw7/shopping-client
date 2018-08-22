import {NgModule} from '@angular/core';
import {AppHeadComponent} from './app-head.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {AppFooterComponent} from './app-footer/app-footer.component';
import {AppBottomComponent} from './app-bottom/app-bottom.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [AppHeadComponent, LoginComponent, AppFooterComponent, AppBottomComponent],
	exports: [AppHeadComponent, LoginComponent, AppFooterComponent, AppBottomComponent],
})
export class MainModule {

}
