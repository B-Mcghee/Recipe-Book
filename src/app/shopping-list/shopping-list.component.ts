import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @Input() Ingredient;

 ingredients: Ingredient[] = [
   new Ingredient('apple', 5),
   new Ingredient('orange', 3)
 ];

  constructor() { }

  ngOnInit() {
  }

  newIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }
}
