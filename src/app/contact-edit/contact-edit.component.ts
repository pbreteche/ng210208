import { ContactListService } from './../contact-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from './../../model/contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit{
 
  contact: Contact|null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private contactList: ContactListService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(map => {
      const id = +(map.get('id') || 1);
      this.contact = Object.assign({}, this.contactList.find(id));
    });
  }

  update(): void {
    this.contactList.update(+(this.contact?.id || 0), Object.assign({}, this.contact));
    this.router.navigate(['/detail', this.contact?.id]);
  }
}
