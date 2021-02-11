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

  constructor(private contactList: ContactListService) {
  }

  trackById(index: number, item: Contact) {
    return item.id;
  }
}
