import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeDetailsComponent } from './search/recipe-details/recipe-details.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path: 'search', component: SearchComponent
  },
  {
    path: 'search/:id', component: RecipeDetailsComponent
  },
  {
    path: 'new', component: NewRecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
