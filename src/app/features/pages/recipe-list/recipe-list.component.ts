import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Importer FormsModule
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Ajouter FormsModule dans le tableau 'imports'
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeList: any[] = [];
  filteredList: any[] = [];
  filterType: string = '';  // Pour filtrer par catégorie
  filterIngredient: string = '';  // Pour filtrer par ingrédient principal

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    // Récupérer les recettes via le service
    this.recipeService.getRecipeListComponent().subscribe((data: any) => {
      this.recipeList = data.meals;
      this.filteredList = this.recipeList;  // Initialement, toutes les recettes sont visibles
    });
  }

  // Filtrer les recettes selon les critères sélectionnés
  filterRecipes(): void {
    this.filteredList = this.recipeList.filter((recipe: any) => {
      // Vérifier si la catégorie correspond au filtre (ou si aucun filtre n'est appliqué)
      const matchesCategory = this.filterType ? recipe.strCategory === this.filterType : true;
      // Vérifier si le nom de la recette contient l'ingrédient principal (ou si aucun filtre n'est appliqué)
      const matchesIngredient = this.filterIngredient ? recipe.strMeal.toLowerCase().includes(this.filterIngredient.toLowerCase()) : true;
      return matchesCategory && matchesIngredient;
    });
  }

  // Fonction pour rediriger vers la page des détails de la recette
  goToDetails(recipe: any): void {
    // Redirection vers la page de détails (vous pouvez ajouter votre logique ici)
    console.log('Détails de la recette', recipe);
  }
}
