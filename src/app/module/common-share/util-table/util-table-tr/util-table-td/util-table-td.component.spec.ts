import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UtilTableTdComponent} from './util-table-td.component';

describe('UtilTableTdComponent', () => {
	let component: UtilTableTdComponent;
	let fixture: ComponentFixture<UtilTableTdComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [UtilTableTdComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UtilTableTdComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
