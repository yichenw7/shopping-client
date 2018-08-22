import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
	selector: 'app-bottom',
	templateUrl: './app-bottom.component.html',
	styleUrls: ['./app-bottom.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class AppBottomComponent implements OnInit, AfterViewInit {
	constructor() {
	}

	ngOnInit(): void {
		this.getColumnList();
	}

	ngAfterViewInit(): void {
		console.log('Method not implemented.');
	}

	getColumnList() {
	}
}
