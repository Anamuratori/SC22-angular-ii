import { Component } from '@angular/core';
import { Route, Router, RouterConfigOptions } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'livro-receitas';

  constructor(private _router: Router){}
  
}
