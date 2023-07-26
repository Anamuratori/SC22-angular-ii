import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PagesService } from '../pages.service';
import { Recipe } from 'src/app/model/recipe';
import { HttpErrorResponse } from '@angular/common/http';
import { take } from 'rxjs';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss'],
})
export class NewRecipeComponent {

  recipeForm: FormGroup;

  editMode = false;

  recipeId: number;

  canExit = false;


  constructor(
    private _formBuilder: FormBuilder,
    private _service: PagesService,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.verifyRoute();
  }

  public verifyRoute() {
    if (this._route.routeConfig.path.includes('edit')) {
      this.editMode = true;
      this.recipeId = this._route.snapshot.params['id'];
      this.getRecipeById(this.recipeId);
    }
  }

  public buildForm() {
    this.recipeForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      image: ['', [Validators.required]],
      author: ['', [Validators.required]],
      ingredients: ['', [Validators.required]],
      method: ['', [Validators.required]]
    })
  }

  public getRecipeById(id: number) {
    this._service
      .getRecipeById(id)
      .pipe(take(1))
      .subscribe((resp) => {
        this.recipeForm.patchValue({ ...resp })
      })
  }

  public postRecipe() {
    this._service.postRecipe(this.recipeForm.getRawValue())
      .subscribe({
        next: (resp: Recipe) => {
          alert('Recipe created successfully!');
          location.assign('/search');
        }, error: (error: HttpErrorResponse) => {
          alert('Ops! Error creating recipe!');
        }
      })
  }

  public putRecipe() {
    this._service.putRecipe(this.recipeId, this.recipeForm.getRawValue())
      .subscribe({
        next: (resp) => {
          alert(`Recipe ${resp.name} updated!`);
          location.assign('/search');
        }, error: (error: HttpErrorResponse) => {
          alert('Ops! Error.');
        }
      });
  }

  public openDialog(): void {
    if(confirm('Do you really want to exit?')) {
      this.canExit = true;
      location.assign('')    
    } else {
      this.canExit = false;
    }
    
  }
}
