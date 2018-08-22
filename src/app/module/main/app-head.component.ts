import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TestServiceService} from '../../service/test-service.service';
import {RouterConfig} from '../../../core/entity/Router';
import {RouterService} from '../../service/router.service';

@Component({
	selector: 'app-head',
	templateUrl: './app-head.component.html',
	styleUrls: ['./app-head.component.css']
})
export class AppHeadComponent implements OnInit, AfterViewInit {
	public columnList: Array<RouterConfig>;
	public navListShow: boolean;

	constructor(private routerService: RouterService) {
	}

	ngOnInit(): void {
		this.navListShow = false;
		this.getColumnList();
	}

	ngAfterViewInit(): void {
		console.log('Method not implemented.');
	}

	getColumnList() {
		this.routerService.getColumnList().then(data => this.columnList = data);
	}

	onClickNavBtn(): void {
		this.navListShow = !this.navListShow;
	}
}
