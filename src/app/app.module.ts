import { RoutingModule } from './routing/routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactNavComponent } from './contact-nav/contact-nav.component';
import { ContactNewFormComponent } from './contact-new-form/contact-new-form.component';
import { ContactReactiveFormComponent } from './contact-reactive-form/contact-reactive-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailComponent,
    ContactNavComponent,
    ContactNewFormComponent,
    ContactReactiveFormComponent,
    NotFoundComponent,
    ContactEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
