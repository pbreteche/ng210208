import { ContactListService } from './../contact-list.service';
import { Contact } from './../../model/contact';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-nav',
  templateUrl: './contact-nav.component.html',
  styleUrls: ['./contact-nav.component.scss']
})
export class ContactNavComponent {
  contacts: Contact[] = this.contactList.findAll();

  constructor(private contactList: ContactListService) {}
}
