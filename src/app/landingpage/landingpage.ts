import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { Header } from '../header/header';
import { Focus } from '../focus/focus';
import { Collaboration } from '../collaboration/collaboration';
import { Team } from '../team/team';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [NavBar, Header, Focus, Collaboration, Team, Contact, Footer],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss',
})
export class Landingpage {

}
