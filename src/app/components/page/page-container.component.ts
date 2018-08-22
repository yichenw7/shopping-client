import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
	selector: 'app-page-container',
	template: `
		<div class="pagination-container cf">
			<div class="pagination">
				<span id="ysa_page_of_top">{{pageInfoLeft}}</span>
				<nz-select style="width: 200px;" nzShowSearch nzAllowClear nzPlaceHolder="Select a person"
						   [(ngModel)]="selectedValue"
				>
					<nz-option nzLabel="Sort by Price" nzValue="1"></nz-option>
					<nz-option nzLabel="Low to High" nzValue="2"></nz-option>
					<nz-option nzLabel="High to Low" nzValue="3"></nz-option>
				</nz-select>
				<span id="ysa_showing">{{pageInfoRight}}</span></div>
			<div class="page-control next">
				<a (click)="clickChangePage(true)" >
					<span class="anticon anticon-caret-right "></span>
					<span class="text">next page</span>
				</a>
			</div>
			<div class="page-control prev" >
				<a (click)="clickChangePage(false)" >
					<span class="anticon anticon-caret-left "></span>
					<span class="text">prev page</span>
				</a>
			</div>
			<div class="page-control all">
				<a>
					<span class="allico">All</span>
					<span class="text">View All</span>
				</a>
			</div>
		</div>
	`,
	encapsulation: ViewEncapsulation.None,
})
export class PageContainerComponent implements OnInit {
	@Input() selectList: any[];
	@Input()
	set pageIndex(index: number) {
		this._pageIndex = index;
		this.updatePageInfoStr();
	}
	@Input() pageSize;
	@Input()
	set total (count: number) {
		this._total = count;
		this.updatePageInfoStr();
	}

	@Output() pageChange = new EventEmitter<number>();
	private _pageIndex = 1;
	private _total = 0;
	pageInfoLeft = '';
	pageInfoRight = '';
	pageTotal = 0;
	selectedValue: string;
	constructor() {
	}

	ngOnInit() {
		// this.updatePageInfoStr();
	}
	updatePageInfoStr() {
		const pageSize = this.pageSize;
		const currentPageNum = this._pageIndex;
		// 总条数
		const countNum = this._total;
		// 总页数
		const pageCountNum = Math.ceil(countNum / pageSize);
		// 开始条数
		const startNum = (currentPageNum - 1) * pageSize + 1;
		// 结束条数
		const endNum = currentPageNum * pageSize - 1;
		this.pageInfoLeft = `PAGE ${currentPageNum} OF ${pageCountNum} `;
		this.pageInfoRight = ` ${startNum} - ${endNum > countNum ? countNum : endNum} OF ${countNum}`;
		this.pageTotal = pageCountNum ;
	}
	// 分页改变
	clickChangePage(isNext: boolean) {
		if ((this._pageIndex === 1 && !isNext)
				|| (this._pageIndex === this.pageTotal && isNext)
		) {
			return ;
		}
		const pageNum = this._pageIndex + (isNext ? 1 : -1);
		this.pageChange.emit(pageNum);
	}
}
