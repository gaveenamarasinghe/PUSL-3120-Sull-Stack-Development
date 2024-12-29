import { Component } from '@angular/core';
import { ServicesComponent } from "./services/services.component";

@Component({
  selector: 'app-root',
  imports: [ServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BOOKME-Web-Application';
}
