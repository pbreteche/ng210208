import { ContactListService } from './../contact-list.service';
import { Contact } from './../../model/contact';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-nav',
  templateUrl: './contact-nav.component.html',
  styleUrls: ['./contact-nav.component.scss']
})
export class ContactNavComponent {
  contacts: Observable<Iterable<Contact>> = this.contactList.all();

  syncContacts: Iterable<Contact> = [];

  constructor(private contactList: ContactListService) {
  }
}
