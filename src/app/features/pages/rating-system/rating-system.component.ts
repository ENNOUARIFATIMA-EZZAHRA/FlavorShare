import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating-system.component.html',
  styleUrls: ['./rating-system.component.css']
})
export class RatingComponent {
  // Array of possible rating values (1 to 5 stars)
  ratings = [1, 2, 3, 4, 5];

  // Variable to store the selected rating
  selectedRating: number = 0;

  // Flag to check if the rating has been submitted
  ratingSubmitted: boolean = false;

  // Method to handle star click
  setRating(rating: number): void {
    this.selectedRating = rating;
    this.ratingSubmitted = false; // Reset if user changes rating
  }

  // Method to submit the rating
  submitRating(): void {
    if (this.selectedRating > 0) {
      console.log("Rating submitted:", this.selectedRating);
      this.ratingSubmitted = true;
    } else {
      alert("Please select a rating before submitting.");
    }
  }
}
