import { Component, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges } from "@angular/core";

import { Passenger } from './../../models/passenger.interface';
@Component({
  selector: 'passenger-detail',
  styleUrls: ['./passenger-detail.component.scss'],
  template: `
    <div>
      <span
        class="status"
        [class.checked-in]="detail.checkedIn"
        >
      </span>

      <div *ngIf="editing">
        <input
          type="text"
          [value]="detail.fullname"
          (input)="onNameChange(name.value)"
          #name
        >
      </div>

      <div *ngIf="!editing">
        {{detail.fullname}}
      </div>

      <div class="date">
        Check in date: {{ detail.checkedInDate
          ? (detail.checkedInDate | date: 'y, MMMM d' | uppercase)
          : 'Not checked in'}}
      </div>

      <div>
        Childen: {{detail.children?.length || 0}}
      </div>

      <button (click)="toggleEdit()">
        {{editing ? 'Done' : 'Edit'}}
      </button>

      <button (click)="onRemove()">
        Remove
      </button>


    </div>
  `
})
export class PassengerDetailComponent implements OnChanges, OnInit {

  editing: boolean = false;

  @Input()
  detail!: Passenger;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['detail']) {

      this.detail = Object.assign({}, changes['detail'].currentValue);
    }

    console.log("ngOnChanges");
  }


  toggleEdit(): void {

    if (this.editing) {
      this.edit.emit(this.detail);
    }

    this.editing = !this.editing;
  }

  onNameChange(value: string) {
    //console.log(value);
    this.detail.fullname = value;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }
}
