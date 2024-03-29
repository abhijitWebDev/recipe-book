import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../shared/services/recipe/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [
  ],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;



  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

}
