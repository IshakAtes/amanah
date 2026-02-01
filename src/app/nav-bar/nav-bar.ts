import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
constructor(private router: Router) {}

  async scrollToContact() {
    // 1. Prüfen, ob wir NICHT auf der Startseite ("/") sind
    if (this.router.url !== '/' && !this.router.url.startsWith('/#')) {
      // Erst zur Startseite navigieren
      await this.router.navigate(['/']);
      
      // Ein minimaler Timeout gibt Angular Zeit, die Komponenten zu rendern
      setTimeout(() => {
        this.doScroll();
      }, 100);
    } else {
      // Wenn wir schon da sind, direkt scrollen
      this.doScroll();
    }
  }

  private doScroll() {
    const element = document.getElementById('contact-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
