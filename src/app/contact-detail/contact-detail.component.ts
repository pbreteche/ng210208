import { ContactListService } from './../contact-list.service';
import { Contact } from './../../model/contact';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  contact: Observable<Contact|undefined>|undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactList: ContactListService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(map => {
      const id = +(map.get('id') || 1);
      this.contact = this.contactList.one(id);
    });
  }
}
