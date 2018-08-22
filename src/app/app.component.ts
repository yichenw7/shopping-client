import {
	AfterViewInit, Component, ElementRef, NgZone, OnDestroy, OnInit, Renderer2, ViewChild,
	ViewEncapsulation
} from '@angular/core';
import {User} from '../core/entity/User';
import {TestServiceService} from './service/test-service.service';
import {RouterService} from './service/router.service';
import {RouterConfig} from '../core/entity/Router';
import {NavigationEnd, Router} from '@angular/router';
import {LocationStrategy} from '@angular/common';
import {Subscription} from 'rxjs/internal/Subscription';

class LangEntity {
	key: string;
	name: string;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
	// 路由跳转 订阅
	routerSubscription: Subscription;
	isPopState = false;

	public user: User;
	public userList: Array<User>;

	public langList: Array<LangEntity>;
	public clickedItem: LangEntity;

	public simpleCss: string;
	public anyClass: { [key: string]: boolean };

	columnList: Array<RouterConfig>;

	@ViewChild('headNav')
	greetDiv: ElementRef;
	@ViewChild('contentContainer')
	contentContainer: ElementRef;

	isShowBackTopBtn: boolean;

	public progress: number;

	constructor(private testServiceService: TestServiceService,
				private routerService: RouterService,
				private router: Router,
				private _el: ElementRef,
				private _ngZone: NgZone,
				private renderer: Renderer2,
				private locStrat: LocationStrategy
	) {

	}

	clickTest(item: LangEntity) {
		//  事件绑定 （）
		console.log(item);
		this.clickedItem = item;
		// 变量改变时 同时改变样式
		this.setAnyClass();
	}

	setAnyClass() {
		this.anyClass = {
			'c-red': this.clickedItem && this.clickedItem.key === 'en',
			'bg-blue': this.clickedItem && this.clickedItem.key === 'en',
		};
	}

	getUserList() {
		this.testServiceService.getUserList().then(data => this.userList = data);
	}

	ngOnDestroy() {
		this.routerSubscription.unsubscribe();
	}

	ngOnInit(): void {
		this.locStrat.onPopState(() => {
			console.log('this.locStrat.onPopStat');
			this.isPopState = true;
		});

		this.routerSubscription = this.router.events.subscribe(event => {
			// Scroll to top if accessing a page, not via browser history stack
			if (event instanceof NavigationEnd && !this.isPopState) {
				console.log('Scroll to top if accessing a page, not via browser history stack');
				window.scrollTo(0, 0);
				this.isPopState = false;
			}
			// Ensures that isPopState is reset
			if (event instanceof NavigationEnd) {
				this.isPopState = false;
			}
		});
		console.log('ngOnInit AppComponent');
		this.routerService.initRouteList();
		this.isShowBackTopBtn = false;
		this.user = {
			id: '44444',
			pwd: '密码、、、、',
			uId: '1111111111'
		};

		this.langList = [
			{key: 'en', name: '英文'},
			{key: 'cn', name: '中文'}
		];

		this.simpleCss = 'c-red';
		this.setAnyClass();
		this.getUserList();
	}

	ngAfterViewInit() {
		console.log(111111111111);
		// this.renderer.setStyle(this.greetDiv.nativeElement, 'color', 'red');
		// this.processOutsideOfAngularZone();
	}

	// 路由跳转
	goToDetailView(columnRouter: RouterConfig): void {
		this.router.navigate([columnRouter.path]);
	}


	// Loop outside of the Angular zone
	// so the UI DOES NOT refresh after each setTimeout cycle
	processOutsideOfAngularZone() {
		if (!this.progress) {
			this.progress = 0;
		}
		this.progress++;
		this._ngZone.runOutsideAngular(() => {
			this._increaseProgress((result: boolean) => {
				// reenter the Angular zone and display done
				this._ngZone.run(() => {
					console.log('Outside Done!');
					this.changeShowBackTopBtn(result);
				});
			});
		});
	}

	_increaseProgress(doneCallback: (isShow: boolean) => void) {
		this.progress += 1;
		window.onscroll = () => {
			let t = 0;
			if (window.pageYOffset) {
				t = window.pageYOffset;
				console.log(t);
				// 这一条滤去了大部分， 只留了IE678
			} else if (document.documentElement.scrollTop) {
				t = document.documentElement.scrollTop;
				console.log(t);
				// IE678 的非quirk模式
			} else if (document.body.scrollTop) {
				// IE678 的quirk模式
				t = document.body.scrollTop;
				console.log(t);
			}
			if (t > 500) {
				if (!this.isShowBackTopBtn) {
					doneCallback(true);
				}
			} else if (this.isShowBackTopBtn) {
				doneCallback(false);
			}
		};
	}

	changeShowBackTopBtn(isShow: boolean) {
		this.isShowBackTopBtn = isShow;
	}

	// 回滚最顶部
	scrollBackToTop() {
		window.scrollTo(0, 0);
	}
}
