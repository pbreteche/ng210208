import { Contact } from './../model/contact';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Carnet d\'adresse';
  
  contact: Contact = {
    name: 'Pierre',
    email: 'pierre@example.com'
  };

}
