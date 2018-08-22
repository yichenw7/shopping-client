import {Component, HostBinding, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {RouterService} from '../../service/router.service';
import {RouterConfig} from '../../../core/entity/Router';

@Component({
	selector: 'app-home',
	encapsulation: ViewEncapsulation.None,
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	@HostBinding('class') homeMainClass = 'main-wrapper';

	navList: Array<RouterConfig>;

	constructor(private router: Router,
				private routerService: RouterService,
	) {
	}

	ngOnInit() {
		console.log('进入HomeComponent');
		console.log();
		this.setNavList();
	}


	// 路由跳转
	goToDetailView(): void {
		// this.router.navigate("/area");
	}

	log(event: boolean) {
		console.log(`Accordion has been ${event ? 'opened' : 'closed'}`);
	}

	setNavList(): void {
		this.routerService.getHomeRouteList().then((resp: Array<RouterConfig>) => {
			this.navList = resp;
		});
	}

}
