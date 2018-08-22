import {Injectable} from '@angular/core';

import {RouterConfig} from '../../core/entity/Router';
import {baseConfig_role_list, COLUMN_LIST, HOME_ROUTE_LIST} from '../../mock/mock-router';


@Injectable()
export class RouterService {
	private homeRouteList: Array<RouterConfig>;
	private columnList: Array<RouterConfig>;
	private baseConfigRouterList: Array<RouterConfig>;

	constructor() {
	}

	getColumnList(): Promise<Array<RouterConfig>> {
		return Promise.resolve(COLUMN_LIST);
	}


	getHomeRouteList(): Promise<Array<RouterConfig>> {
		return Promise.resolve(HOME_ROUTE_LIST);
	}

	getBaseConfigRouteList(): Promise<Array<RouterConfig>> {
		return Promise.resolve(baseConfig_role_list);
	}

	initRouteList(): Promise<boolean> {
		this.homeRouteList = HOME_ROUTE_LIST;
		this.columnList = COLUMN_LIST;
		console.log('RouterService initRouteList');
		return Promise.resolve(true);
	}
}
