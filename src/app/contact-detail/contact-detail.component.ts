import { CONTACTS } from './../../data/contacts';
import { Contact } from './../../model/contact';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact = CONTACTS[0];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(map => {
      const id = +(map.get('id') || 1);
      this.contact = CONTACTS[id - 1];
    });
  }
}
