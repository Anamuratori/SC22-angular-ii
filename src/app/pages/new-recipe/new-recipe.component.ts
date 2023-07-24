import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent {

  recipeForm;

  constructor(
    private _formBuilder: FormBuilder,
    private _service: PagesService,
    private _route: ActivatedRoute,
    private _router: Router
    ) {}

    ngOnInit(): void {
      this.buildForm();
    }

    buildForm() {
      this.recipeForm = this._formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        description: ['', [Validators.required, Validators.minLength(10)]],
        image: ['', [Validators.required]],
        author: ['', [Validators.required]],
        ingredients: ['', [Validators.required]],
        method: ['', [Validators.required]]
      })
    }

}
