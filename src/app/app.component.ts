import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [`
  h3 {
    color: dodgerblue;
  }
  `]
})

export class AppComponent {

  niechIdzieDoServers: string = 'niechIdzieWKońcu2';
  taTezNiechIdzieDoServers: number = 123;

}