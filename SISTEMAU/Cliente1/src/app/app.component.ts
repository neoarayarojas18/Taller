import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cliente';
  cssUrl: string;
  constructor(public sanitizer: DomSanitizer){
    this.cssUrl = '/assets/style_login.css';
  }

}

