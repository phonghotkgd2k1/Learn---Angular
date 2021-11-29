import { Component, OnInit} from '@angular/core'
import {Passenger} from '../../models/passenger.interface';
@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['./passenger-dashboard.component.scss'],
    template:`
        <div class="app">
    <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span class="status"
            [class.checked-in] = "passenger.checkedIn">
          </span>
          {{ i }} {{ passenger.fullname }}
          <!-- <p>{{ passenger | json }}</p> -->
          <div class="date">
              Check in date: {{ passenger.checkInDate ? (passenger.checkInDate | date: 'y, MMMM d' | uppercase) 
              : 'Not checked in'}}
          </div>
          <div>
            children: {{passenger.children?.length || 0}}
          </div>
        </li>
      </ul>
    
    </div>
    `
})
export class PassengerDashboardComponent implements OnInit { 
    passengers!: Passenger[];

    constructor(){
        console.log("constructor");
    }

    ngOnInit(): void {
        console.log("ngOnInit");
        this.passengers = [
            {
              id: 1,
              fullname: 'John',
              checkedIn: true,
              checkInDate: 1490742000000,
              children: null
            },
            {
              id: 2,
              fullname: 'Stephen',
              checkedIn: false,
              checkInDate: null,
              children: [{name: 'Teddy', age: 22}, {name: 'Gumayusi', age: 20}]
        
            },
            {
              id: 3,
              fullname: 'Rose',
              checkedIn: true,
              checkInDate: 1491602000000,
              children: [{name: 'Oner', age: 18}, {name: 'Cuzz', age: 21}]
        
            },
            {
              id: 4,
              fullname: 'James',
              checkedIn: true,
              checkInDate: 1492742000000,
              children: null
        
            },
            {
              id: 5,
              fullname: 'Tina',
              checkedIn: false,
              checkInDate: null,
              children: [{name: 'Faker', age: 25}, {name: 'Scout', age: 21}]
        
        
            },
          ];
    }
    
}