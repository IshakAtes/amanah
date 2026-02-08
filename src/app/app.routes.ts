import { Routes } from '@angular/router';
import { Landingpage } from './landingpage/landingpage';
import { SupportUs } from './support-us/support-us';
import { Donation } from './donation/donation';
import { InProgress } from './in-progress/in-progress';
import { AboutUs } from './about-us/about-us';
import { JobsPage } from './jobs-page/jobs-page';

export const routes: Routes = [
    {path: '', component: Landingpage },
    {path: 'support-us', component: SupportUs},
    {path: 'donation', component: Donation},
    {path: 'in-progress', component: InProgress},
    {path: 'about-us', component: AboutUs},
    {path: 'jobs-page', component: JobsPage},
    {path: '**', redirectTo: 'landingpage' },
];
