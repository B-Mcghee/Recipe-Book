import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeComponent } from './recipe/recipe.component';
import { IngredientComponent } from './ingredient/ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    RecipeComponent,
    IngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
