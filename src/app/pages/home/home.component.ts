import { Component } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';
import { take } from 'rxjs';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public recipes: Recipe[] = [];

  constructor(private _service: PagesService) { }

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
