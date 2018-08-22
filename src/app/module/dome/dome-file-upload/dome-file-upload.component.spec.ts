import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DomeFileUploadComponent} from './dome-file-upload.component';

describe('DomeFileUploadComponent', () => {
	let component: DomeFileUploadComponent;
	let fixture: ComponentFixture<DomeFileUploadComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DomeFileUploadComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DomeFileUploadComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
