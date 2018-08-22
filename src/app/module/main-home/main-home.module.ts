import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {RouterModule} from '@angular/router';
import {MainHomeRoutingModule} from './main-home.routing.module';
import {CommonComponentsModule} from '../../components/components.module';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		MainHomeRoutingModule,
		CommonComponentsModule
	],
	declarations: [MainComponent]
})
export class MainHomeModule {
}
