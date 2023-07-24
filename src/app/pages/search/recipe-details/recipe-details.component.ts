import { Component } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';
import { take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PagesService } from '../../pages.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent {

  public recipe: Recipe;
  id: number;

  constructor(
    private _service: PagesService,
    private _route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this.getRecipeById(this.id);
  }

  public getRecipeById(id: number): void {
    this._service
    .getRecipeById(this.id)
    .pipe(take(1))
    .subscribe((response) => {
      this.recipe = response;
    })
  }
}
