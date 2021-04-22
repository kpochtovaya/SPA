import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

export interface IValuesArray {
  value: string
}

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectUserComponent implements OnInit {

  @Input() control: any;
  @Input() valuesArray: IValuesArray[];
  @Input() classLabel: string;
  @Input() id: string;
  @Input() textLabel: string;
  @Input() class: string;
 
  constructor() { }

  ngOnInit(): void {
  }

}
