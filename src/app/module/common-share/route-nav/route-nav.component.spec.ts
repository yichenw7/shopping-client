import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RouteNavComponent} from './route-nav.component';

describe('RouteNavComponent', () => {
	let component: RouteNavComponent;
	let fixture: ComponentFixture<RouteNavComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [RouteNavComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RouteNavComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
