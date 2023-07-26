import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SearchComponent } from './search/search.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './search/filter/filter.component';
import { RecipesListComponent } from './search/recipes-list/recipes-list.component';
import { PagesRoutingModule } from './pages-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RecipesItemComponent } from './search/recipes-item/recipes-item.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeDetailsComponent } from './search/recipe-details/recipe-details.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    PagesComponent,
    SearchComponent,
    NewRecipeComponent,
    HomeComponent,
    FilterComponent,
    RecipesListComponent,
    RecipesItemComponent,
    RecipeDetailsComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule, 
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [
    PagesComponent
  ]

})
export class PagesModule { }
