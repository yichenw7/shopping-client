import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UtilTableComponent} from './util-table.component';

describe('UtilTableComponent', () => {
	let component: UtilTableComponent;
	let fixture: ComponentFixture<UtilTableComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [UtilTableComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UtilTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
