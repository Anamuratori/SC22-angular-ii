import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SearchComponent } from './search/search.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './search/filter/filter.component';
import { RecipesListComponent } from './search/recipes-list/recipes-list.component';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    PagesComponent,
    SearchComponent,
    NewRecipeComponent,
    HomeComponent,
    FilterComponent,
    RecipesListComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
    PagesComponent
  ]

})
export class PagesModule { }
