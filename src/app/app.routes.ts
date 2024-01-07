import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'portfolio', component: PortafolioComponent },
    { path: 'testimonials', component: TestimonialsComponent },
    { path: 'services', component: ServicesComponent },
    // { path: 'contact', component: ContactComponent }
];
