import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter,} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientName', {static:false}) ingredientNameRef: ElementRef;
  @ViewChild('ingredientAmount', {static:false}) ingredientAmountRef: ElementRef;
  @Output() addIngredient = new EventEmitter<Ingredient>();


  constructor() { }

  ngOnInit() {
  }

  addNewIngredient(){
     const ingredientName = this.ingredientNameRef.nativeElement.value;
     const ingredientAmount = this.ingredientAmountRef.nativeElement.value;
     const newIngredient = new Ingredient(ingredientName, ingredientAmount);

     this.addIngredient.emit(newIngredient);


  }
} 
