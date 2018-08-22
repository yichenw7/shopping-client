export class RouterConfig {
	name: string;
	path: string;
	parent?: string;
	icon?: string;
	isActive?: boolean;
	children?: Array<RouterConfig>;
}
