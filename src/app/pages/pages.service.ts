import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../model/recipe';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private _url = 'http://localhost:3000/recipes'

  constructor(private _http: HttpClient) { }

  public getRecipes(searchValue: string): Observable<Recipe[]> {
    let httpParams = new HttpParams({fromObject: {search: searchValue}});
    
    return this._http.get<Recipe[]>(this._url, {params: httpParams});
  }

  public getRecipeById(id: number): Observable<Recipe> {
    return this._http.get<Recipe>(`${this._url}/${id}`);
  }

  public postRecipe (recipe: Recipe): Observable<Recipe> {
    return this._http.post<Recipe>(this._url, recipe);
  }

  public putRecipe (id: number, recipe: Recipe): Observable<Recipe> {
    return this._http.put<Recipe>(`${this._url}/${id}`, recipe);
  }

  public deleteRecipe (id: number) {
    return this._http.delete<void>(`${this._url}/${id}`);
  }
}
