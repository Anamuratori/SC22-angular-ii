import { Component, OnInit } from '@angular/core';
import { RecipesListService } from './recipes-list.service';
import { take } from 'rxjs';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  public recipes: Recipe[] = [];

  constructor(private _service: RecipesListService) { }

  ngOnInit(): void {
    this.getRecipes();

  }

  public getRecipes(searchValue: string = ''): void {
    this._service
    .getRecipes(searchValue)
    .pipe(take(1))
    .subscribe((response) => {
      this.recipes=response;
    })
  }



}
