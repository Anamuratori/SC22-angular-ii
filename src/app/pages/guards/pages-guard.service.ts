import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { NewRecipeComponent } from '../new-recipe/new-recipe.component';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export const PagesGuard: CanDeactivateFn<NewRecipeComponent> = (
  component: NewRecipeComponent
) => {
  if (!component.canExit) {
    component.openDialog();
    return false;
  }
  return true;
  
};