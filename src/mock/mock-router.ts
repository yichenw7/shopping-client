import {RouterConfig} from '../core/entity/Router';

export const COLUMN_LIST = [
	{
		name: 'Home',
		// path: "./home/area"
		path: './home'
	},
	{
		name: 'Product',
		path: './product'
	},
	{
		name: 'About',
		path: './about'
	},
	{
		name: 'baseconfig',
		path: './baseconfig/area'
	}
];

export const HOME_ROUTE_LIST: Array<RouterConfig> = [
	{
		name: 'area',
		icon: 'i-area',
		path: './area',
		isActive: true
	},
	{
		name: 'unit',
		icon: 'i-area',
		path: './product'
	},
	{
		name: 'person',
		icon: 'i-user',
		path: './about'
	}
];

export const baseConfig_role_list: Array<RouterConfig> = [
	{
		name: 'area',
		icon: 'i-area',
		path: './area',
		isActive: true
	},
];
// export const INTRO_ROUTES = ROUTER_LIST.intro.map(route => {
//   return {
//     path        : route.path,
//     loadChildren: route.loadChildren
//   };
// });
// export const DEMO_ROUTES = ROUTER_LIST.components.reduce((previousValue, currentValue) => {
//   return previousValue.concat(currentValue.children)
// }, []).map(route => {
//   return {
//     path        : route.path,
//     loadChildren: route.loadChildren
//   };
// });
