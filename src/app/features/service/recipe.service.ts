import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  // Get all recipes (default with empty search)
  getRecipeList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/search.php?s=`);
  }

  // Get recipe by ID for details page
  getRecipeById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/lookup.php?i=${id}`);
  }
}
