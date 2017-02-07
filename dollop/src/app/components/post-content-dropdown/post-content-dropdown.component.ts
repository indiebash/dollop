import { Component, OnInit, Host, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'post-content-dropdown',
  templateUrl: './post-content-dropdown.component.html',
  styleUrls: ['./post-content-dropdown.component.less'],
  host: {
		'(document:click)': 'clickOutOfModal($event)',
	}
})
export class PostContentDropdownComponent implements OnInit {
  toggled: boolean = false;
  @Output() onClick: EventEmitter<number> = new EventEmitter<number>();

  constructor(private elementRef: ElementRef) { }

  ngOnInit() { }

  clickOutOfModal(event) {
		if (this.toggled && !this.elementRef.nativeElement.contains(event.target)) {
			this.toggled = false;
		}
	}

  select(item: number) {
    this.onClick.emit(item);
    this.toggled = false;
  }
}
