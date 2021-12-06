import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// containers
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";

// components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
// services
import { PassengerDashboardService } from "./passenger-dashboard.sevice";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [CommonModule],
  exports: [PassengerDashboardComponent],
  providers: [PassengerDashboardService]
})
export class PassengerDashboardModule {

}
