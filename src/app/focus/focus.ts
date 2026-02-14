import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-focus',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './focus.html',
  styleUrl: './focus.scss',
})
export class Focus {
  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
