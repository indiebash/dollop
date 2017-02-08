import { Component, Input, Output, EventEmitter, forwardRef, trigger, state, animate, transition, style } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({

	selector: 'toggle-switch',
	templateUrl: 'toggle-switch.component.html',
	styleUrls: ['toggle-switch.component.less'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => ToggleSwitchComponent),
			multi: true
		}
	],
	animations: [
		trigger('stateChanged', [
			state('true', style({ left: '0%' })),
			state('false', style({ left: '-49%' })),
			transition('true => false', animate('400ms ease-in')),
			transition('false => true', animate('400ms ease-out'))
		])
	]
})
export class ToggleSwitchComponent implements ControlValueAccessor {

	@Input() _toggleValue: boolean = false;
	@Input() disabled: boolean = false;
	@Input() trueText: string = 'Yes';
	@Input() falseText: string = 'No';
	@Output() onChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
	propagateChange = (_: boolean) => { };
	animState: string = 'false';

	constructor() {}

	get toggleValue() {
		return this._toggleValue;
	}

	set toggleValue(val: boolean) {
		this._toggleValue = val;
		this.animState = this._toggleValue+'';
		this.propagateChange(this._toggleValue);
	}

	toggle() {
		if(!this.disabled){
			this.toggleValue = !this._toggleValue;
			this.onChanged.emit(this.toggleValue);
		}
	}

	writeValue(value: boolean) {
		if (value !== undefined) {
			this.toggleValue = value;
		}else{
			this.toggleValue = false;
		}
	}

	registerOnChange(fn) {
		this.propagateChange = fn;
	}

	registerOnTouched() { }
}
