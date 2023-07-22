import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { NewRecipeComponent } from './pages/new-recipe/new-recipe.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'recipe',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
