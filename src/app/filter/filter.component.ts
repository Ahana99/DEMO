import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() type!: string;
  @Input() values: string[] = [];
  @Input() selectedValue: string = 'all';
  @Output() selectedValueChange = new EventEmitter<string>();

  onSelect(value: string) {
    this.selectedValue = value;
    this.selectedValueChange.emit(this.selectedValue);
  }
}