import {
	Component, HostBinding, Inject, Input, OnDestroy, OnInit, Output, EventEmitter
} from '@angular/core';
import {RouterConfig} from '../../../../core/entity/Router';

@Component({
	selector: 'app-home-nav',
	templateUrl: './home-nav.component.html',
	styleUrls: ['./home-nav.component.css']
})
export class HomeNavComponent implements OnInit, OnDestroy {
	@HostBinding('class') navClass = 'm-left-nav';

	@Input() navList: Array<RouterConfig>;

	constructor() {
	}

	ngOnInit(): void {
		console.log(this.navList);
	}

	ngOnDestroy(): void {
	}

	log(event: boolean) {
		console.log(`Accordion has been ${event ? 'opened' : 'closed'}`);
	}

	onClickHeading(navItem: RouterConfig, navIndex: number) {
		console.log(navItem, navIndex);
	}
}

/**
 * 路由预定义的属性
 */
export interface IRouterConfig {
	key: string; // 路由的key
	url: string; // url路径
	moduleName?: string; // 路由的模块名,　界面展示用, 与ui.router配置无关
	group?: string; // 路由分组配置, 此参数在配置中心(BaseConfig界面中使用到, 配置中心将各个子模块分为三组, 基础配置 资源配置 业务配置), 就是通过此参数来确定group
	isLocal?: boolean; // 是否是本地模块, 即不受后台权限控制, 用于代码分层中设置的路由
}
