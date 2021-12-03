import { Component, OnInit } from "@angular/core";

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['./passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count [items]="passengers">
      </passenger-count>
      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail] = "passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)"
        >
      </passenger-detail>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {

  passengers!: Passenger[];

  constructor() {

    console.log("constructor");
  }

  ngOnInit(): void {

    console.log("ngOnInit");

    this.passengers = [
      {
        id: 1,
        fullname: 'John',
        checkedIn: true,
        checkedInDate: 1490742000000,
        children: null,
      },
      {
        id: 2,
        fullname: 'Stephen',
        checkedIn: false,
        checkedInDate: null,
        children: [{ name: 'Ted', age: 12 }, { name: 'Mark', age: 6 }]
      },
      {
        id: 3,
        fullname: 'Rose',
        checkedIn: true,
        checkedInDate: 1491602000000,
        children: null,
      },
      {
        id: 4,
        fullname: 'James',
        checkedIn: true,
        checkedInDate: 1492742000000,
        children: [{ name: 'Jesica', age: 3 }]
      },
      {
        id: 5,
        fullname: 'Tina',
        checkedIn: false,
        checkedInDate: null,
        children: null
      },
    ];

    

  }
  handleEdit(event: Passenger){

    this.passengers = this.passengers.map((passenger: Passenger) => {
      if(passenger.id === event.id){
        passenger = { ...event }

        //passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });

    console.log(this.passengers);

}

handleRemove(event: Passenger){

  this.passengers = this.passengers.filter((passengers: Passenger) => {
    return passengers.id != event.id;
  });
}

}
