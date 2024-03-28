import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactUsComponent } from './contact-us.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContactUsComponent,
  },
];

@NgModule({
  declarations: [ContactUsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ContactUsComponent],
  bootstrap: [],
})
export class ContactUsModule {}
