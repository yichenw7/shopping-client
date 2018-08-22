import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from '../../../../core/entity/hero';
import {HeroSearchService} from '../../../service/hero-search.service';
import {Observable, Subject, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
	selector: 'app-hero-search',
	templateUrl: './hero-search.component.html',
	styleUrls: ['./hero-search.component.css'],
	providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
	heroes: Observable<Hero[]>;
	private searchTerms = new Subject<string>();

	constructor(
		private heroSearchService: HeroSearchService,
		private router: Router) {
	}

	search(term: string): void {
		// Push a search term into the observable stream.
		this.searchTerms.next(term);
	}

	ngOnInit(): void {
		this.heroes = this.searchTerms
			.pipe(
				debounceTime(300),        // wait for 300ms pause in events
				// ignore new term if same as previous term
				distinctUntilChanged(),
				// switch to new search observable each time the term changes
				switchMap((term: string) => term ? this.heroSearchService.search(term) : of<Hero[]>([])),
				catchError(error => {
					// TODO: real error handling
					console.log(`Error in component ... ${error}`);
					return of<Hero[]>([]);
				})
			);
	}

	gotoDetail(hero: Hero): void {
		const link = ['/detail', hero.id];
		this.router.navigate(link);
	}
}
