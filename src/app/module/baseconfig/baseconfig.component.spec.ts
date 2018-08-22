import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BaseconfigComponent} from './baseconfig.component';

describe('BaseconfigComponent', () => {
	let component: BaseconfigComponent;
	let fixture: ComponentFixture<BaseconfigComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BaseconfigComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BaseconfigComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
