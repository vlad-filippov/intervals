import { Component, EventEmitter, Output } from '@angular/core';
import { LabelValueModel } from "../../models/label-value.model";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Output() public setInterval: EventEmitter<string> = new EventEmitter<string>();

  public dropdownOptions: LabelValueModel[];

  constructor() {
    this.dropdownOptions = [
      {
        label: '5 minutes',
        value: 5,
      },
      {
        label: '30 minutes',
        value: 30,
      },
      {
        label: '1 hour',
        value: 60,
      },
    ];
  }
}
