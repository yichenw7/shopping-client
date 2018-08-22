export const LOGIN_ROUTER_LIST = [
	{
		'path': 'login',
		'loadChildren': './nz-intro-index/nz-intro.module#NzIntroModule'
	},
	{
		'path': 'docs/angular/getting-started',
		'loadChildren': './nz-intro-getting-started/nz-intro-get-started.module#NzIntroGetStartedModule'
	},
	{
		'path': 'changelog',
		'loadChildren': './nz-intro-changelog/nz-intro-changelog.module#NzIntroChangeLogModule'
	}
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
