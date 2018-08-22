import {Component, OnInit, NgZone, ElementRef} from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	progress: number;
	label: string;

	constructor(private _ngZone: NgZone,
				private _el: ElementRef,
	) {
	}

	ngOnInit() {
		this.progress = 0;
	}

	// Loop inside the Angular zone
	// so the UI DOES refresh after each setTimeout cycle
	processWithinAngularZone() {
		this.label = 'inside';
		this.progress = 0;
		this._increaseProgress(() => console.log('Inside Done!'));
	}

	// Loop outside of the Angular zone
	// so the UI DOES NOT refresh after each setTimeout cycle
	processOutsideOfAngularZone() {
		this.label = 'outside';
		this.progress = 0;
		this._ngZone.runOutsideAngular(() => {
			this._increaseProgress(() => {
				// reenter the Angular zone and display done
				this._ngZone.run(() => {
					console.log('Outside Done!');
				});
			});
		});
	}

	_increaseProgress(doneCallback: () => void) {
		this.progress += 1;
		console.log(`Current progress: ${this.progress}%`);
		if (this.progress < 100) {
			window.setTimeout(() => this._increaseProgress(doneCallback), 10);
		} else {
			doneCallback();
		}
	}
}
