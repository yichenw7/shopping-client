import {
	Component, HostBinding, Inject, Input, OnDestroy, OnInit, Output, EventEmitter
} from '@angular/core';
import {ITableHeader} from '../../common-share/util-table/util-table';
import {Area} from '../../../../core/entity/Area';

@Component({
	selector: 'app-home-area',
	templateUrl: './home-area.component.html',
})
export class HomeAreaComponent implements OnInit, OnDestroy {
	@HostBinding('class') class = 'main-wrapper';
	tHeadTdList: Array<ITableHeader>;
	tBodyList: Array<Area>;

	constructor() {
	}

	ngOnInit(): void {
		this.initTableBase();
		console.log('进入home area 子模块');
	}

	ngOnDestroy(): void {
	}

	// 初始化 table配置
	initTableBase(): void {
		this.tHeadTdList = [
			{field: 'Name', title: 'FDS_01_16_01'},
			{field: 'Code', title: 'FDS_01_16_02'},
			{field: 'Description', title: 'FDS_01_16_03'},
			{field: 'bottoms', title: 'FDS_00_08_14'}
		];
		this.tBodyList = [];
	}
}
