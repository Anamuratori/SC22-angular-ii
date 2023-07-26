import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime, take } from 'rxjs';
import { Recipe } from 'src/app/model/recipe';
import { PagesService } from '../../pages.service';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  public recipes: Recipe[] = [];

  constructor(private _service: PagesService,
    private _route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  public getRecipes(searchValue: string = ''): void {
    this._service
      .getRecipes(searchValue)
      .pipe(take(1))
      .subscribe((resp) => {
        this.recipes = resp;        
      })
  }

  public deleteRecipe(id: number): void {
    this._service.deleteRecipe(id)
      .pipe(take(1))
      .subscribe(() => { alert('Recipe deleted successfully!'); location.reload() })
  }
}