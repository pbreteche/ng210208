import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactNewFormComponent } from './contact-new-form.component';

describe('ContactNewFormComponent', () => {
  let component: ContactNewFormComponent;
  let fixture: ComponentFixture<ContactNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
