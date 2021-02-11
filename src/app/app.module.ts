import { RoutingModule } from './routing/routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactNavComponent } from './contact-nav/contact-nav.component';
import { ContactNewFormComponent } from './contact-new-form/contact-new-form.component';
import { ContactReactiveFormComponent } from './contact-reactive-form/contact-reactive-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactReaciveEditComponent } from './contact-reacive-edit/contact-reacive-edit.component';
import { AlphanumericValidatorDirective } from './alphanumeric-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailComponent,
    ContactNavComponent,
    ContactNewFormComponent,
    ContactReactiveFormComponent,
    NotFoundComponent,
    ContactEditComponent,
    ContactReaciveEditComponent,
    AlphanumericValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
