import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private ratings = new BehaviorSubject<any[]>([]);

  constructor() {}

  // Récupérer les notes et commentaires
  getRatings(): Observable<any[]> {
    return this.ratings.asObservable();
  }

  // Ajouter une note et un commentaire
  addRating(rating: number, comment: string): void {
    const currentRatings = this.ratings.value;
    currentRatings.push({ rating, comment });
    this.ratings.next(currentRatings);
  }
}
