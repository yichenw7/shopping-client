import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './app-footer.component.html',
	styleUrls: ['./app-footer.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class AppFooterComponent implements OnInit, AfterViewInit {
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
