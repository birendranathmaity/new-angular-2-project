import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['../darktheme.scss']
})
export class AppComponent {
	isDarkTheme: boolean = false;
}
