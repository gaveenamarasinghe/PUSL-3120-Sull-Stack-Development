import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-summary',
  imports: [],
  templateUrl: './booking-summary.component.html',
  styleUrl: './booking-summary.component.css'
})
export class BookingSummaryComponent {
  bookingDetails = {
    reference: 'ABC123456',
    passengerName: '[Passenger Name]',
    email: '[Email Address]',
    contactNumber: '[Contact Number]',
    departureLocation: '[Departure Location]',
    arrivalLocation: '[Arrival Location]',
    departureDateTime: '[Departure Date & Time]',
    arrivalDateTime: '[Arrival Date & Time]',
    seatNumber: '[Seat Number]',
    totalFare: '[Total Fare]'
}


constructor() {}

onSubmit(): void {
  alert('Proceeding to payment...');
}

editBooking(): void {
  alert('Editing booking details...');
}

cancelBooking(): void {
  alert('Booking canceled...');
}
}
