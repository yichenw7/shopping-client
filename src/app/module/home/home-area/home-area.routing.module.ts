import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeAreaComponent} from './home-area.component';

@NgModule({
	imports: [RouterModule.forChild([
		{path: '', component: HomeAreaComponent}
	])],
	exports: [RouterModule]
})
export class HomeAreaRoutingModule {
}
