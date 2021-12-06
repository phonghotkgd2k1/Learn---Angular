import { Injectable } from "@angular/core";

import { Passenger } from "./models/passenger.interface";

@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {

  constructor() { }

  getPassengers(): Passenger[] {

    return [
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
}
