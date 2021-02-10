import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactReaciveEditComponent } from './contact-reacive-edit.component';

describe('ContactReaciveEditComponent', () => {
  let component: ContactReaciveEditComponent;
  let fixture: ComponentFixture<ContactReaciveEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactReaciveEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactReaciveEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
