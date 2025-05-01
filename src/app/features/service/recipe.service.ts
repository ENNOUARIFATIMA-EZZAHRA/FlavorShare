import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';  // URL de l'API

  constructor(private http: HttpClient) {}

  // Fonction pour récupérer la liste des recettes
  getRecipeListComponent(): Observable<any> {
    return this.http.get(this.apiUrl);  // Requête GET pour obtenir les recettes
  }
}
