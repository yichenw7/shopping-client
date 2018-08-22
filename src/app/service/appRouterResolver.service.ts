import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {RouterService} from './router.service';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class AppRouterResolver implements Resolve<boolean> {
	constructor(private routerService: RouterService) {
	}

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<any> | Promise<any> | any {
		console.log('AppRouterResolver resolve');
		return this.routerService.initRouteList();
	}
}
