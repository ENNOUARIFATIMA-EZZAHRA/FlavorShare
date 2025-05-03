import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../service/recipe.service';
import { Location } from '@angular/common';
import { RatingComponent } from '../rating-system/rating-system.component';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [CommonModule,RatingComponent ],
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: any;
  stepIndex = 1;  // Index des étapes

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getRecipeById(id).subscribe((data: any) => {
        this.recipe = data.meals ? data.meals[0] : null;
      });
    }
  }

  goBack(): void {
    this.location.back();
  }

  splitInstructions(instructions: string): string[] {
   
    return instructions
      .split('.')
      .map(s => s.trim())
      .filter(s => s.length > 0);
  }
}
