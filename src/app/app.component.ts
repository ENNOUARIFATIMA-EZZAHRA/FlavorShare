import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './features/pages/navbar/navbar.component';
import { FooterComponent } from './features/pages/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,  // Déclare le composant comme standalone
  imports: [RouterOutlet, NavbarComponent, FooterComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FlavorShare';
}
