import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-jobs-page',
  standalone: true,
  imports: [NavBar, Footer],
  templateUrl: './jobs-page.html',
  styleUrl: './jobs-page.scss',
})
export class JobsPage {

}
