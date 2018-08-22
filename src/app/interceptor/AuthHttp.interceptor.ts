import {Injectable} from '@angular/core';

import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../service/auth.service';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
	/**
	 *    请求 权限验证拦截器
	 * @time: 2017-12-04 14:34:36
	 */
	constructor(private auth: AuthService) {
		console.log(auth);
	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// If you have a need to mutate the request body,
		// you need to copy the request body, mutate the copy, and then use clone() to copy the request and set the new body.
		// Since requests are immutable, they cannot be modified directly. To mutate them, use clone():
		console.log(req, next);
		// This is a duplicate. It is exactly the same as the original.
		// const dupReq = req.clone();

		// Change the URL and replace 'http://' with 'https://'
		// const secureReq = req.clone({url: req.url.replace('http://', 'https://')});
		const authStr: string = this.auth.getAuthorizationHeader();

		/*	const header = new HttpHeaders();
            header.set('Content-Type', 'application/json; charset=utf-8');
            header.append('AuthCacheKey', authStr);*/
		const headerObj = {
			'AuthCacheKey': authStr,
			'Content-Type': 'application/json; charset=utf-8',
			'UserIDKey': '359b76213dee430191d0e82157685c0e',
		};
		const authReq = req.clone({
			setHeaders: headerObj,
			// url: "/dev" + req.url,
			/*withCredentials: true*/
		});

		/*console.log(authReq);
		console.log(authReq.headers);
		console.log(authReq.headers.keys());*/
		return next.handle(authReq);

	}
}
