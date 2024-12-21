import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeatSelectorComponent } from "./seat-selector/seat-selector.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SeatSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BOOKME-Web-Application';
}
 