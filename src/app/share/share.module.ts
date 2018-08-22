import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterService} from '../service/router.service';
import {AppRouterResolver} from '../service/appRouterResolver.service';

@NgModule({
	imports: [CommonModule],
	declarations: [],
	exports: [
		CommonModule,
		FormsModule,
		// HttpClientModule provide
		HttpClientModule,
	],
	providers: [RouterService, AppRouterResolver]
})
export class ShareModule {
}
