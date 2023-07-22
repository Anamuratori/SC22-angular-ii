import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/model/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesListService {

  private _url = 'http://localhost:3000/recipes'

  constructor(private _http: HttpClient) { }

  public getRecipes(searchValue: string): Observable<Recipe[]> {
    let httpParams = new HttpParams({fromObject: {search: searchValue}});
    
    return this._http.get<Recipe[]>(this._url, {params: httpParams});
  }
}
