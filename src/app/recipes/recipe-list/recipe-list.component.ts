import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
<<<<<<< HEAD
    
    recipes: Recipe[];

  constructor(private recipeService: RecipeService) { 

  }
=======
    @Output() recipeWasSelected = new EventEmitter<Recipe>();
    recipes: Recipe[];
  constructor(private recipeService: RecipeService) { }
>>>>>>> 014ec73a4a46d784edc0d83036bfd96b7efb55b8

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  onRecipeSelected(recipe:Recipe){
   
  }
}
