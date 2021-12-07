import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalComponent } from './rental/rental.component';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path: 'rental', component: RentalComponent},
  {path: 'home', component: HomeComponent},
  {path: 'packages', component: PackagesComponent},
  {path: 'contactus', component: ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
