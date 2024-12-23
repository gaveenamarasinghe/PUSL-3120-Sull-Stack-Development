import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterBusownerComponent } from "./register-busowner/register-busowner.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegisterBusownerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BOOKME-Web-Application';
}
