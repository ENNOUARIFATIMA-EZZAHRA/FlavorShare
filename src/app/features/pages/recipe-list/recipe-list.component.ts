import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeList: any[] = [];
  filteredList: any[] = [];
  filterType: string = '';
  filterIngredient: string = '';

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getRecipeList().subscribe((data: any) => {
      this.recipeList = data.meals || [];
      this.filteredList = this.recipeList;
    });
  }
filterRecipes(): void {
  // Étape 1: filtrer selon la catégorie
  let filtered = this.filterByCategory(this.recipeList);

  // Étape 2: filtrer selon l'ingrédient principal
  filtered = this.filterByIngredient(filtered);

  // Résultat final
  this.filteredList = filtered;
}

private filterByCategory(list: any[]): any[] {
  if (!this.filterType) return list;
  return list.filter(recipe => recipe.strCategory === this.filterType);
}

private filterByIngredient(list: any[]): any[] {
  if (!this.filterIngredient) return list;
  return list.filter(recipe =>
    recipe.strMeal.toLowerCase().includes(this.filterIngredient.toLowerCase())
  );
}


  goToDetails(recipe: any): void {
    window.location.href = `/details/${recipe.idMeal}`;
  }
}
