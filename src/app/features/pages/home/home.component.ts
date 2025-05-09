import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router'; 
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,              
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule], 
})
export class HomeComponent {}
