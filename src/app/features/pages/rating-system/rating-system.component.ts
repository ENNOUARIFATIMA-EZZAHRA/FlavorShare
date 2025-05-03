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
  ratings = [1, 2, 3, 4, 5];
  selectedRating: number = 0;
  ratingSubmitted: boolean = false; // باش نعرف واش المستخدم صيفط التقييم

  setRating(rating: number): void {
    this.selectedRating = rating;
    this.ratingSubmitted = false; // كنرجعو false فحال بغا يبدل التقييم
  }

  submitRating(): void {
    if (this.selectedRating > 0) {
      console.log("تم إرسال التقييم:", this.selectedRating);
      this.ratingSubmitted = true;
    } else {
      alert("المرجو اختيار عدد النجوم قبل الإرسال.");
    }
  }
}
