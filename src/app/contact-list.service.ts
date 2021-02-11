import { Contact } from './../model/contact';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  private data = new Map<number, Contact>();
  private subject = new BehaviorSubject<Array<Contact>>([]);

  constructor(private http: HttpClient) {
    setTimeout(() => {
      this.fetch();
    }, 500); 
  }

  private fetch(): void {
    this.http.get<Contact[]>('assets/contacts.json').subscribe(
      contacts => {
        contacts.forEach((contact: Contact) => {
          this.data.set(contact.id as number, contact);
        });
        this.nextAll()
      }
    );
  }

  all(): Observable<Iterable<Contact>> {
    return this.subject.asObservable();
  }

  one(id: number): Observable<Contact|undefined> {
    return this.subject.pipe(
      map(contacts => contacts.find(
        c => c.id === id
      ))
    );
  }

  find(id: number): Contact|undefined {
    return this.data.get(id);
  }

  findAll(): Iterable<Contact> {
    return this.data.values();
  }

  add(contact: Contact): void {
    if (!contact.id) {
      contact.id = this.data.size + 1;
    }
    
    this.data.set(contact.id, contact);
    this.nextAll()
  }

  update(id: number, contact: Contact): void {
    this.data.set(id, contact);
    this.nextAll()
  }

  private nextAll() {
    // wrap into Array as template engine does not refresh with base iterable
    this.subject.next(Array.from(this.data.values()));
  }
}
