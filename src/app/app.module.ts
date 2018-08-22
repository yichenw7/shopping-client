import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

// Although NgModel is a valid Angular directive, it isn't available by default. It belongs to the optional FormsModule.
import {TestServiceService} from './service/test-service.service';
// import {RouterService} from "./service/router.service";
import {AppRoutingModule} from './app.routing.module';
// import {HeroModule} from "./module/hero/hero.module";
import {HomeModule} from './module/home/home.module';
import {AuthHttpInterceptor} from './interceptor/AuthHttp.interceptor';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {AuthService} from './service/auth.service';
import {MainModule} from './module/main/main.module';
import {ShareModule} from './share/share.module';
import {BaseconfigModule} from './module/baseconfig/baseconfig.module';
import {AboutUsModule} from './module/about-us/about-us.module';
import {MainHomeModule} from './module/main-home/main-home.module';
import {ContactUsModule} from './module/contact-us/contact-us.module';
import {ProductModule} from './module/product/product.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

@NgModule({
	declarations: [
		AppComponent,
	],

	imports: [
		BrowserModule,
		ShareModule,
		MainModule,
		//  主页
		HomeModule,
		BaseconfigModule,
		MainHomeModule,
		AboutUsModule,
		ContactUsModule,
		ProductModule,
		//  测试
		// HeroModule,
		// 注意，AppRoutingModule是最后一个
		// 它位于HeroesModule之后。
		BrowserAnimationsModule,
		FormsModule,
		HttpClientModule,
		NgZorroAntdModule,
		AppRoutingModule,
	],
	providers: [
		TestServiceService,
		AuthService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthHttpInterceptor,
			multi: true,
		},
		// a single value.
		// Note the multi: true option
		// This is required and tells Angular that HTTP_INTERCEPTORS is an array of values, rather than,
		{ provide: NZ_I18N, useValue: zh_CN,
		},
		HttpClient
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
