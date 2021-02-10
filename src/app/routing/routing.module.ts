import { ContactEditComponent } from './../contact-edit/contact-edit.component';
import { NotFoundComponent } from './../not-found/not-found.component';
import { ContactDetailComponent } from './../contact-detail/contact-detail.component';
import { ContactNewFormComponent } from './../contact-new-form/contact-new-form.component';
import { ContactNavComponent } from './../contact-nav/contact-nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ContactNavComponent },
  { path: 'nouveau', component: ContactNewFormComponent },
  { path: 'detail/:id', component: ContactDetailComponent },
  { path: 'edit/:id', component: ContactEditComponent },
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
