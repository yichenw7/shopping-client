import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UtilTableTrComponent} from './util-table-tr.component';

describe('UtilTableTrComponent', () => {
	let component: UtilTableTrComponent;
	let fixture: ComponentFixture<UtilTableTrComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [UtilTableTrComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UtilTableTrComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
