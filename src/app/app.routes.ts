import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },               // Default route (homepage)
    { path: 'sobre-nosotros', component: AboutUsComponent },  // About Us page
    { path: 'servicios', component: ServicesComponent },    // Services page
    { path: 'contacto', component: ContactComponent },      // Contact page
    { path: '**', redirectTo: '', pathMatch: 'full' }      // Wildcard route to redirect to homepage if route not found
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }