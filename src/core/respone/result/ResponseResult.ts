// 后台返回结果格式
export class ResponseResult<T> {
	code: number;
	count: number;
	message: string;
	status: string;
	data: T;
}
export class PageResult<T> {
	total: number;
	result: T[];
}
