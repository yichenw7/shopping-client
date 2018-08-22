import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

	constructor() {
	}

	getAuthorizationHeader(): string {
		return 'd06c70b3f2a847508f43b754517e05e4&&fds_10.0.8.44_10016';
	}
}
