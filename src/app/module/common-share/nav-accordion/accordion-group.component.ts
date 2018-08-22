import {
	Component, HostBinding, Inject, Input, OnDestroy, OnInit, Output, EventEmitter
} from '@angular/core';
import {NavAccordionComponent} from './accordion.component';

/**
 * ### Accordion heading
 * Instead of using `heading` attribute on the `accordion-group`, you can use
 * an `accordion-heading` attribute on `any` element inside of a group that
 * will be used as group's header template.
 */
@Component({
	selector: 'app-accordion-group, app-accordion-panel',
	templateUrl: './accordion-group.component.html',
})
export class AccordionPanelComponent implements OnInit, OnDestroy {
	/*	set host change class: 'panel' style :'display:block'
	* */
	// @HostBinding('class.panel')
	@HostBinding('style.display') styleDisplay = 'block';
	@Input() noHeading: boolean;
	/** Clickable text in accordion's group header, check `accordion heading` below for using html in header */
	@Input() heading: string;
	/** Clickable text and icon in accordion's group header, check `accordion headObj` below for using html in header */
	@Input() headingObj: { icon: string, name: string, isActive: boolean };
	private isOnlyIcon: boolean;
	/** Provides an ability to use Bootstrap's contextual panel classes
	 * (`panel-primary`, `panel-success`, `panel-info`, etc...).
	 * List of all available classes [available here]
	 * (https://getbootstrap.com/docs/3.3/components/#panels-alternatives)
	 */
	@Input() panelClass: string;
	/** if <code>true</code> — disables accordion group */
	@Input() isDisabled: boolean;
	/** Emits when the opened state changes */
	@Output() isOpenChange: EventEmitter<boolean> = new EventEmitter();

	// Questionable, maybe .panel-open should be on child div.panel element?
	/** Is accordion group open or closed. This property supports two-way binding */
	@HostBinding('class.panel-open')
	@Input()
	get isOpen(): boolean {
		return this._isOpen;
	}

	set isOpen(value: boolean) {
		console.log('isOpen');
		if (value !== this.isOpen) {
			if (value) {
				this.accordion.closeOtherPanels(this);
			}
			this._isOpen = value;
			this.headingObj.isActive = value;
			Promise.resolve(null).then(() => {
				this.isOpenChange.emit(value);
			});
		}
	}

	get isBs3(): boolean {
		return true ;
		// return isBs3();
	}

	protected _isOpen = false;
	// protected accordion: NavAccordionComponent;
	/*TODO note 通过注入来找到一个父组件 ，@Inject/@Optional  安全起见，我们添加了@Optional装饰器*/
	/*TODO A parameter metadata that marks a dependency as optional. Injector provides null if the dependency is not found.*/

	/*TODO url https://angular.cn/guide/dependency-injection-in-action */
	constructor(@Inject(NavAccordionComponent) protected accordion: NavAccordionComponent) {
		console.log(accordion);
		// this.accordion = accordion;
	}

	ngOnInit(): any {
		this.panelClass = this.panelClass || 'panel-default';
		console.log('ngOnInit AccordionPanelComponent');
		if (this.headingObj && this.headingObj.isActive) {
			this.isOpen = true;
		}
		this.accordion.addGroup(this);
	}

	ngOnDestroy(): any {
		this.accordion.removeGroup(this);
	}

	toggleOpen(event: Event): any {
		if (!this.isDisabled) {
			this.isOpen = !this.isOpen;
		}
	}

	// toggle only icon show
	toggleIsOnlyIcon(isOnlyIcon: boolean): void {
		this.isOnlyIcon = isOnlyIcon;
	}
}
