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
    this.filteredList = this.recipeList.filter((recipe: any) => {
      const matchesCategory = this.filterType ? recipe.strCategory === this.filterType : true;
      const matchesIngredient = this.filterIngredient ? recipe.strMeal.toLowerCase().includes(this.filterIngredient.toLowerCase()) : true;
      return matchesCategory && matchesIngredient;
    });
  }

  goToDetails(recipe: any): void {
    window.location.href = `/details/${recipe.idMeal}`;
  }
}
