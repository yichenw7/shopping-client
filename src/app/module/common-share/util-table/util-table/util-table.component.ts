import {Component, Input, OnInit} from '@angular/core';
import {TableHeader} from '../util-table';

@Component({
	selector: 'util-table',
	templateUrl: './util-table.component.html',
	styleUrls: ['./util-table.component.css']
})
export class UtilTableComponent implements OnInit {
	@Input()
	tableHeadTds: TableHeader[];
	@Input()
	hasCheck: boolean;
	@Input()
	hasSerial: boolean;

	checkBoxAll: number;

	tableNoData = true;

	constructor() {
		console.log('constructor');
	}

	ngOnInit() {
		this.tableHeadTds = this.tableHeadTds.map((val: TableHeader) => {
			if (val.isShow === undefined) {
				val.isShow = true;
			}
			return val;
		});
		console.log('ngOnInit');
	}

	// 排序
	tableBySort(h_index: number): void {
		console.log(h_index);
	}

	changeTrCheckBoxStatus(flag: number): void {
		console.log(flag);
	}
}
