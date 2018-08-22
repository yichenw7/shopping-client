import {Component, HostBinding, Input} from '@angular/core';
import {AccordionPanelComponent} from './accordion-group.component';
import {AccordionConfig} from './accordion.config';

/** Displays collapsible content panels for presenting information in a limited amount of space. */
@Component({
	selector: 'app-nav-accordion',
	template: `
		<div class="panel-group " role="tablist">
			<ng-content></ng-content>
		</div>
	`,
	// host: {
	// '[attr.aria-multiselectable]': 'closeOthers',
	// ,
	// class: '',
	// style: ''
	// }
})
export class NavAccordionComponent {
	/** if `true` expanding one item will close all others */
	// @HostBinding('attr.aria-multiselectable')
	@Input()
	closeOthers = false;
	@HostBinding('style.display')
	@Input()
	display: 'block';
	@HostBinding('attr.role') role = 'button';
	// @HostBinding('class') class = 'panel-group';
	protected groups: AccordionPanelComponent[] = [];

	constructor(config: AccordionConfig) {
		Object.assign(this, config);
	}

	closeOtherPanels(openGroup: AccordionPanelComponent): void {
		if (!this.closeOthers) {
			return;
		}

		this.groups.forEach((group: AccordionPanelComponent) => {
			if (group !== openGroup) {
				group.isOpen = false;
			}
		});
	}

	addGroup(group: AccordionPanelComponent): void {
		this.groups.push(group);
	}

	removeGroup(group: AccordionPanelComponent): void {
		const index = this.groups.indexOf(group);
		if (index !== -1) {
			this.groups.splice(index, 1);
		}
	}
}
