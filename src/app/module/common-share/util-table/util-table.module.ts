import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilTableTrComponent} from './util-table-tr/util-table-tr.component';
import {UtilTableTdComponent} from './util-table-tr/util-table-td/util-table-td.component';
import {UtilTableComponent} from './util-table/util-table.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [UtilTableTrComponent, UtilTableTdComponent, UtilTableComponent],
	exports: [UtilTableTrComponent, UtilTableTdComponent, UtilTableComponent]
})
export class UtilTableModule {
}
