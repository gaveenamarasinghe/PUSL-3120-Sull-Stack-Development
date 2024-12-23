import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginBusownerComponent } from "./login-busowner/login-busowner.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginBusownerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BOOKME-Web-Application';
}
