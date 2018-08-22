import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {User} from '../../../core/entity/User';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

	private heroesUrl = 'api/heroes';  // URL to web api

	constructor(private http: Http) {
	}

	getUserList(): Promise<User[]> {
		return this.http.get(this.heroesUrl)// Angular 的http.get返回一个 RxJS 的Observable对象
			.toPromise()	// Angular 的Observable并没有一个toPromise操作符... 没有打包在一起发布。Angular的Observable只是一个骨架实现
			.then(response => response.json().data as User[])
			.catch(this.handleError);
	}

	/*addUser(name: string): Promise<string> {
		return this.http
			.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
			.toPromise()
			.then(res => res.json().data as User)
			.catch(this.handleError);
	}*/
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
