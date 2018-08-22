import {Injectable} from '@angular/core';

import {Hero} from '../../core/entity/hero';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

@Injectable()
export class HeroService {
	private heroesUrl = 'app/heroes';  // URL to web api

	constructor(private http: HttpClient) {
	}

	getHeroes(): Promise<Array<Hero>> {
		return Promise.resolve(null);
	}
		// const headers = new HttpHeaders();
		// headers.set('Content-Type', 'application/json; charset=utf-8');
		// return this.http
		// 	.get(this.heroesUrl)
		// 	// When you call subscribe(...) a Subscription is returned which doesn't have a toPromise().
		// 	// If you move the code from subscribe to map you can use toPromise() instead of subscribe
		// 	.subscribe(
		// 		(data: Response) => {
		// 			console.log(data);
		// 			return data;
		// 		},
		// 		(error: HttpErrorResponse) => {
		// 			return error;
		// 		}
		// 	)
		// 	.map((res: any) => {
		// 		console.log(res);
		// 		return res.json();
		// 	})
		// 	.toPromise()
		// 	.catch(this.handleError);
		/*	.subscribe((response) => {
				return response.json().data as Hero[];
			}),{responseType: 'text'}
	}
*/
	getHero(id: number): Promise<Hero> {
		return this.getHeroes()
			.then(heroes => heroes.find(hero => hero.id === id));
	}

	save(hero: Hero): Promise<Hero> {
		if (hero.id) {
			return this.put(hero);
		}
		return this.post(hero);
	}

	delete(hero: Hero): Promise<Response> {
		const headers = new HttpHeaders();
		headers.append('Content-Type', 'application/json');

		const url = `${this.heroesUrl}/${hero.id}`;

		return this.http
			.delete(url, {headers: headers})
			.toPromise()
			.catch(this.handleError);
	}

	/**
	 *    test link post url
	 * @time: 2017-12-04 15:35:28
	 */
	linkPost(): Promise<Response> {
		return this.http
			.post('/db/area/findAreaListTree', null)
			// When you call subscribe(...) a Subscription is returned which doesn't have a toPromise().
			// If you move the code from subscribe to map you can use toPromise() instead of subscribe
			/*.subscribe(
				(data: Response) => {
					console.log(data);
					return data;
				},
				(error: HttpErrorResponse) => {
					return error;
				}
			)*/
		/*	.map((res: any) => {
				console.log(res);
				return res;
			})*/
			.toPromise()
			.catch(this.handleError);
	}

	// Add new Hero
	private post(hero: Hero): Promise<Hero> {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});

		return this.http
			.post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
			.toPromise()
			.then(res => res)
			.catch(this.handleError);
	}

	// Update existing Hero
	private put(hero: Hero): Promise<Hero> {
		const headers = new HttpHeaders();
		headers.append('Content-Type', 'application/json');

		const url = `${this.heroesUrl}/${hero.id}`;

		return this.http
			.put(url, JSON.stringify(hero), {headers: headers})
			.toPromise()
			.then(() => hero)
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}
