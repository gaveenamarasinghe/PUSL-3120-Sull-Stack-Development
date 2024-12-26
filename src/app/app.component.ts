import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BusRegistrationComponent } from './bus-registration/bus-registration.component';
import { AdminComponent } from './admin/admin.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardComponent, BusRegistrationComponent, AdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BOOKME-Web-Application';
}
