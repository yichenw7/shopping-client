import {Injectable} from '@angular/core';
import {User} from '../../core/entity/User';
import {userDetail, userList} from '../../mock/mock-user';

import {UserEx} from '../../core/ex/UserEx';

@Injectable()
export class TestServiceService {
	getUserList(): Promise<Array<User>> {
		return Promise.resolve(userList);
	}

	getDetail(id: string): Promise<UserEx> {
		console.log(id);
		return Promise.resolve(userDetail);
	}
}
