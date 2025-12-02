import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],  // corrigé
  standalone: true
})
export class AppComponent {      // corrigé
  email: string = "lamah@gmail.com";
}
