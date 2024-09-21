import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class appComponent {
  seats = [
    [0, 0, 0, 0, 0, 0, 0], // Row 1
    [0, 0, 0, 0, 0, 0, 0], // Row 2
    [0, 0, 0, 0, 0, 0, 0], // Row 3
    [0, 0, 0, 0, 0, 0, 0], // Row 4
    [0, 0, 0, 0, 0, 0, 0], // Row 5
    [0, 0, 0, 0, 0, 0, 0], // Row 6
    [0, 0, 0, 0, 0, 0, 0], // Row 7
    [0, 0, 0, 0, 0, 0, 0], // Row 8
    [0, 0, 0, 0, 0, 0, 0], // Row 9
    [0, 0, 0], // Row 10 (last row with 3 seats)
  ];

  requestedSeats: number = 0;
  totalSeats = 80;
  availableSeats = this.totalSeats - this.getBookedSeatsCount();

  // Method to get the total number of booked seats
  getBookedSeatsCount(): number {
    return this.seats.flat().filter((seat: number) => seat === 1).length;
  }

  // Function to book seats
  bookSeats(requestedSeats: number) {
    if (requestedSeats > 7 || requestedSeats < 1) {
      alert('You can only book between 1 and 7 seats.');
      return;
    }

    let seatsBooked = 0;
    const bookedSeats: string[] = [];

    for (let row = 0; row < this.seats.length; row++) {
      const availableSeatsInRow = this.seats[row].filter(
        (seat) => seat === 0
      ).length;
      if (availableSeatsInRow >= requestedSeats - seatsBooked) {
        // Book seats in this row
        for (let i = 0; i < this.seats[row].length; i++) {
          if (this.seats[row][i] === 0 && seatsBooked < requestedSeats) {
            this.seats[row][i] = 1;
            seatsBooked++;
            bookedSeats.push(`Row ${row + 1}, Seat ${i + 1}`);
          }
        }
        break;
      }
    }

    if (seatsBooked < requestedSeats) {
      alert(
        `Not enough adjacent seats available to book ${requestedSeats} seats.`
      );
    } else {
      alert(`Successfully booked seats: ${bookedSeats.join(', ')}`);
    }

    this.availableSeats = this.totalSeats - this.getBookedSeatsCount();
  }
}
