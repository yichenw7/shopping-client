import {NgModule, ModuleWithProviders} from '@angular/core';

import {AppCollapseDirective} from './collapse.directive';

@NgModule({
	declarations: [AppCollapseDirective],
	exports: [AppCollapseDirective]
})
export class AppCollapseModule {
	static forRoot(): ModuleWithProviders {
		return {ngModule: AppCollapseModule, providers: []};
	}
}
