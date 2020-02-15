import { Recipe } from './recipe.model';

export class RecipeService{
    recipes: Recipe[] = [
        new Recipe('A test Recipe', 'this is Not a test', 'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32-1100x1650.jpg')
        ,new Recipe('A test Recipe', 'this is a test', 'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32-1100x1650.jpg')
  
      ];
  
      getRecipes(){
          return this.recipes.slice();
      }
}