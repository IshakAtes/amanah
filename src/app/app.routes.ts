import { Routes } from '@angular/router';
import { Landingpage } from './landingpage/landingpage';
import { SupportUs } from './support-us/support-us';
import { Donation } from './donation/donation';

export const routes: Routes = [
    {path: '', component: Landingpage },
    {path: 'support-us', component: SupportUs},
    {path: 'donation', component: Donation},
];
