import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';

import {AccordionPanelComponent} from './accordion-group.component';
import {NavAccordionComponent} from './accordion.component';
import {AccordionConfig} from './accordion.config';
import {AppCollapseModule} from '../../../attribute-directives/collapse/collapse.module';
import {ShareModule} from '../../../share/share.module';

@NgModule({
	imports: [CommonModule, AppCollapseModule, ShareModule],
	declarations: [NavAccordionComponent, AccordionPanelComponent],
	exports: [NavAccordionComponent, AccordionPanelComponent]
})
export class NavAccordionModule {
	static forRoot(): ModuleWithProviders {
		return {ngModule: NavAccordionModule, providers: [AccordionConfig]};
	}
}
