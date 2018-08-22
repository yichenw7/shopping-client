import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Hero} from '../../core/entity/hero';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient, HttpResponse} from '@angular/common/http';


@Injectable()
export class HeroSearchService {
	constructor(private http: HttpClient) {
	}

	search(term: string): Observable<Hero[]> {
		return this.http
			.get(`app/heroes/?name=${term}`)
			.pipe(
				map((r: HttpResponse<Hero[]>) => r.body),
				catchError((error: any) => {
						console.error('An friendly error occurred', error);
						return Observable.throw(error.message || error);
					})
			);
	}
}
