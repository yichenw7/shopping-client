/**
 * 路由模块
 * @time: 2017-09-25 16:40:07
 * @return: AppRoutingModule
 */
import {NoPreloading, PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
// 我们将保持app.routing.ts文件中只有通用路由
const BASE_ROUTER_LIST: Routes = [
	{path: 'home', loadChildren: './module/home/home.module#HomeModule'},
	{path: 'baseconfig', loadChildren: './module/baseconfig/baseconfig.module#BaseconfigModule'},
	{path: 'product', loadChildren: './module/product/product.module#ProductModule'},
	{path: 'about-us', loadChildren: './module/about-us/about-us.module#AboutUsModule'},

	{path: 'product-list', loadChildren: './module/product/product.module#ProductModule'},

	{path: 'main-home', loadChildren: './module/main-home/main-home.module#MainHomeModule'},
	{path: 'contact-us', loadChildren: './module/contact-us/contact-us.module#ContactUsModule'},
	/*{ path: 'testDetail/:id', component: TestDetailComponent },*/
	// 路由器使用先匹配者优先的策略来选择路由
	// 通配符路由是路由配置中最没有特定性的那个，因此务必确保它是配置中的最后一个路由。
];

@NgModule({
	// 这里使用了forRoot()方法，因为我们是在应用根部提供配置好的路由器。 forRoot()方法提供了路由需要的路由服务提供商和指令，并基于当前浏览器 URL 初始化导航。
	// useHash: false 以回到基于HashLocationStrategy的传统方式。
	// 路由器通过两种LocationStrategy提供商来支持所有这些风格：

	// PathLocationStrategy - 默认的策略，支持“HTML 5 pushState”风格。

	// HashLocationStrategy - 支持“hash URL”风格。
	// 当我们在应用中导航时，路由器就把激活的组件显示在<router-outlet>里面。
	imports: [
		RouterModule.forRoot([
				{
					path: '',
					redirectTo: '/main-home',
					pathMatch: 'full',
				},
				...BASE_ROUTER_LIST,
				{path: '**', redirectTo: '/login', pathMatch: 'full'}
			],
			{
				useHash: true,
				preloadingStrategy: NoPreloading,
				enableTracing: true// <-- debugging purposes only
			}
		),
	],
	exports: [RouterModule],
})

export class AppRoutingModule {
}

/*todo  路由数组
* path 每个Route都会把一个URL的path映射到一个组件。 注意，path不能以斜杠（/）开头。
* :id 	是一个路由参数的令牌(Token)
* data 属性用来存放于每个具体路由有关的任意信息。该数据可以被任何一个激活路由访问，并能用来保存诸如 页标题、面包屑以及其它静态只读数据 （resolve守卫来获取动态数据）
* 空路径（''）表示应用的默认路径，当URL为空时就会访问那里，因此它通常会作为起点
* 路由中的**路径是一个通配符。当所请求的URL不匹配前面定义的路由表中的任何路径时，路由器就会选择此路由。 这个特性可用于显示“404 - Not Found”页，或自动重定向到其它路由。
* */
/* todo
* 路由出口 <router-outlet></router-outlet>
* todo 路由器链接  <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
* 字符串赋给routerLink（“一次性”绑定）
* 如果需要更加动态的导航路径，那就把它绑定到一个返回链接参数数组的模板表达式。 路由器会把这个数组解析成完整的URL。
* */
/* todo 路由器状态
//  Router Event 路由器事件	Description 描述
//  NavigationStart
//  本事件会在导航开始时触发
//  RoutesRecognized
//  本事件会在路由器解析完URL，并识别出了相应的路由时触
//  RouteConfigLoadStart
//  本事件会在Router对一个路由配置进行惰性加载之前触发
//  RouteConfigLoadEnd
//  本事件会在路由被惰性加载之后触发
//  NavigationEnd
//  本事件会在导航成功结束之后触发
//  NavigationCancel
//  本事件会在导航被取消之后触发。 这可能是因为在导航期间某个路由守卫返回了false
//  NavigationError
//  这个事件会在导航由于意料之外的错误而失败时触发
* */

