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
