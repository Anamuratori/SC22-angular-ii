import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';
import { RecipesListComponent } from '../recipes-list/recipes-list.component';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss'],
  providers: [RecipesListComponent]
})
export class RecipesItemComponent {

  constructor(private _router: Router, private _recipesList: RecipesListComponent) { }

  @Input() recipe: Recipe;

  public deleteRecipe(id: number) {
    this._recipesList.deleteRecipe(id);
  }
}
