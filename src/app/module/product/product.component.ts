import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {HeroService} from '../../service/hero.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	constructor(private heroService: HeroService) {
	}

	ngOnInit() {
	}

	public openModalWithComponent() {
	}

	public linkPost() {
		this.heroService.linkPost().then((resp: any) => {
			console.log(resp);
		});
	}

}
