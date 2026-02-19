import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-mentoring',
  standalone: true,
  imports: [NavBar, Footer],
  templateUrl: './mentoring.html',
  styleUrl: './mentoring.scss',
})
export class Mentoring {

}
