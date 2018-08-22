import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavAccordionModule} from './nav-accordion/accordion.module';
import {NavAccordionComponent} from './nav-accordion/accordion.component';
import {AccordionPanelComponent} from './nav-accordion/accordion-group.component';
import {UtilTableTrComponent} from './util-table/util-table-tr/util-table-tr.component';
import {UtilTableComponent} from './util-table/util-table/util-table.component';
import {UtilTableTdComponent} from './util-table/util-table-tr/util-table-td/util-table-td.component';
import {UtilTableModule} from './util-table/util-table.module';
import {UtilRouteNavComponent} from './route-nav/route-nav.component';
import {RouterModule} from '@angular/router';
import {CommonComponentsModule} from '../../components/components.module';

@NgModule({
	imports: [
		NavAccordionModule.forRoot(),
		UtilTableModule,
		CommonModule,
		RouterModule,
		CommonComponentsModule
	],
	declarations: [UtilRouteNavComponent],
	exports: [
		NavAccordionComponent,
		AccordionPanelComponent,
		UtilTableTrComponent,
		UtilTableTdComponent,
		UtilTableComponent,
		UtilRouteNavComponent
	]
})
export class CommonShareModule {
}
