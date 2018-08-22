import {Routes} from '@angular/router';
import {LOGIN_ROUTER_LIST} from './login.router';
// import { INTRO_ROUTES, DEMO_ROUTES } from './router';
// 路由数组
export const BASE_ROUTER_LIST: Routes = [
	{path: '', redirectTo: '/login', pathMatch: 'full'},
	// todo 验证 terminal被替换成了pathMatch，默认为prefix
	{path: '**', redirectTo: '/login', pathMatch: 'full'},
	...LOGIN_ROUTER_LIST
];


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

