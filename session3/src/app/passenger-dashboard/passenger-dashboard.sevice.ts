import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Passenger } from "./models/passenger.interface";

import { catchError, Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {

  constructor(private http: HttpClient) { }

  getPassengers(): Observable<Passenger[]> {

    return this.http
      .get<Passenger[]>('http://localhost:3000/passengers')
      .pipe(
        tap(data => console.log(data)),
        //catchError(this.handleError<Passenger[]>('getPassengers', [])),
      );
  }

  handleError<T>(arg0: string, arg1: never[]): (err: any, caught: Observable<Passenger[]>) => import("rxjs").ObservableInput<any> {
    throw new Error("Method not implemented.");
  }
}
