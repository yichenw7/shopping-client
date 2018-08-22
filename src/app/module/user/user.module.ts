import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {UserService} from './user.service';

// 路由模块
@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		UserComponent
	],
	providers: [UserService]
})
export class UserModule {
}
