import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Seat {
  id?: string;
  status?: 'booked' | 'available' | 'selected';
  empty?: boolean;
}

@Component({
  selector: 'app-seat-selector',
  templateUrl: './seat-selector.component.html',
  styleUrls: ['./seat-selector.component.css'],
  imports: [CommonModule]
})
export class SeatSelectorComponent {
  seatLayout: boolean[][] = [
    [true, true, false, true, true],
    [true, true, false, true, true],
    [true, true, false, true, true],
    [true, true, false, true, true],
    [true, true, false, true, true],
    [true, true, false, true, true],
    [true, true, false, true, true],
    [true, true, false, true, true],
    [true, true, false, true, true],
    [true, true, false, true, true],
    [true, true, true, true, true],
  ];

  seats: Seat[] = [];
  selectedSeats: string[] = [];

  constructor() {
    this.generateSeats();
  }

  generateSeats(): void {
    let leftSeatNumber = 1;
    let rightSeatNumber = 1;

    this.seatLayout.forEach((row, rowIndex) => {
      row.forEach((isSeat, colIndex) => {
        if (isSeat) {
          const seatId = colIndex < 2 
            ? `L${leftSeatNumber++}` // Left side seats
            : `R${rightSeatNumber++}`; // Right side seats

          this.seats.push({
            id: seatId,
            status: Math.random() > 0.7 ? 'booked' : 'available',
          });
        } else {
          this.seats.push({ empty: true });
        }
      });
    });
  }

  toggleSeatSelection(seat: Seat): void {
    if (seat.status === 'booked' || seat.empty) return;

    if (seat.status === 'selected') {
      seat.status = 'available';
      this.selectedSeats = this.selectedSeats.filter((id) => id !== seat.id);
    } else {
      if (this.selectedSeats.length >= 2) return;
      seat.status = 'selected';
      if (seat.id !== undefined) this.selectedSeats.push(seat.id);
    }
  }

  getSelectedSeats(): string[] {
    return this.selectedSeats;
  }

  confirmSelection(): void {
    alert(`You have confirmed the following seats: ${this.getSelectedSeats().join(', ')}`);
    this.seats.forEach((seat) => {
      if (seat.status === 'selected') seat.status = 'booked';
    });
    this.selectedSeats = [];
  }
}
