import { Routes } from '@angular/router';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { BookingReceiptComponent } from './booking-receipt/booking-receipt.component';

export const routes: Routes = [
{ path:'booking-summary',component:BookingSummaryComponent},
{ path:'booking-receipt',component:BookingReceiptComponent},
{ path:'',redirectTo:'/booking-summary',pathMatch:'full'}
];
