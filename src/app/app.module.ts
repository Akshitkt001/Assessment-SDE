import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { appComponent } from './app.component';
//import { SeatReservationComponent } from './seat-reservation/seat-reservation.component';

@NgModule({
  declarations: [
    appComponent,
    //SeatReservationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule here
  ],
  providers: [],
  bootstrap: [appComponent],
})
export class AppModule {}
