import { UserService } from './user.service';
import { RoutingModule } from './routing/routing.module';
import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, NG_VALIDATORS } from '@angular/forms';
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
import { MinValidatorDirective } from './min-validator.directive';
import { EmailPartPipe } from './email-part.pipe';
import { LoginComponent } from './login/login.component';

const API_URL = new InjectionToken('app.api-url');
const API_URL_VALUE = 'http://localhost:4200';
const userServiceFactory = function(defaultUsername) {
  const service = new UserService();
  service.user = defaultUsername;
  return service;
}

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
    AlphanumericValidatorDirective,
    MinValidatorDirective,
    EmailPartPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService, // class, short syntax
    { provide: UserService, useClass: UserService }, // class, explicit syntax
    // création d'un alias (useExisting)
    // ajout dans un conteneur multiple de service (multi: true)
    // => ajoute une référence vers un service existant, dans le conteneur
    { provide: NG_VALIDATORS, useExisting: MinValidatorDirective, multi: true },
    // use non-object value
    // => need to manually create DI token
    { provide: API_URL, useValue: API_URL_VALUE },
    { provide: UserService, useFactory: userServiceFactory, deps: ['John Doe'] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
