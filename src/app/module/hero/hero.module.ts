import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroComponent} from './hero.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {DashboardComponent} from './dashboard/dashboard.component';

/*import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from "../../service/in-memory-data.service";*/

import {HeroService} from '../../service/hero.service';
import {RouterModule} from '@angular/router';
import {HeroSearchService} from '../../service/hero-search.service';
import {FormsModule} from '@angular/forms';
import {HeroesComponent} from './heroes/heroes.component';

// import {HERO_ROUTER_LIST} from "./hero.router";

export const HERO_ROUTER_LIST = [
	{path: 'heroes', component: HeroesComponent},
	{path: 'dashboard', component: DashboardComponent},
	{path: 'hero/:id', component: HeroDetailComponent},
	{path: 'search/:key', component: HeroSearchComponent}
];

@NgModule({
	imports: [
		CommonModule,
		// <-- import the FormsModule before binding with [(ngModel)]
		FormsModule,
		// InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 }),
		// forChild
		RouterModule.forChild(HERO_ROUTER_LIST),
	],
	declarations: [
		HeroesComponent,
		HeroComponent,
		HeroDetailComponent,
		HeroSearchComponent,
		DashboardComponent
	],
	providers: [
		HeroService, HeroSearchService],
	exports: [RouterModule]
})
export class HeroModule {
}
