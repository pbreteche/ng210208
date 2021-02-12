import { AuthenticatedGuard } from './../authenticated.guard';
import { ContactReactiveFormComponent } from './../contact-reactive-form/contact-reactive-form.component';
import { ContactReaciveEditComponent } from './../contact-reacive-edit/contact-reacive-edit.component';
import { NotFoundComponent } from './../not-found/not-found.component';
import { ContactDetailComponent } from './../contact-detail/contact-detail.component';
import { ContactNewFormComponent } from './../contact-new-form/contact-new-form.component';
import { ContactNavComponent } from './../contact-nav/contact-nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ContactNavComponent },
  { path: 'nouveau', component: ContactNewFormComponent, canActivate: [AuthenticatedGuard] },
  { path: 'detail/:id', component: ContactDetailComponent },
  { path: 'edit/:id', component: ContactReaciveEditComponent, canActivate: [AuthenticatedGuard] },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
