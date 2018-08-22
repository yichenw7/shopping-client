import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RouterConfig} from '../../../core/entity/Router';
import {RouterService} from '../../service/router.service';

@Component({
	selector: 'app-baseconfig',
	encapsulation: ViewEncapsulation.None,
	templateUrl: './baseconfig.component.html',
	styleUrls: ['./baseconfig.component.scss']
})
export class BaseconfigComponent implements OnInit {
	navList: Array<RouterConfig>;
	navIsOnlyIcon = false;

	constructor(private routerService: RouterService) {
	}

	ngOnInit() {
		this.setNavList();
	}

	setNavList(): void {
		this.routerService.getBaseConfigRouteList()
			.then((resp: Array<RouterConfig>) => {
				this.navList = resp;
			});
	}

	navToggleIcon(data: boolean): void {
		console.log(data);
		this.navIsOnlyIcon = data;
	}
}
