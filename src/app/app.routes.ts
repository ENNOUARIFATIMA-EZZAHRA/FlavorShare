import { Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { RecipeListComponent } from './features/pages/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './features/pages/recipe-details/recipe-details.component';
import { LoginComponent } from './features/Auth/login/login.component';
import { RegistreComponent } from './features/Auth/registre/registre.component';
import { NavbarComponent } from './features/pages/navbar/navbar.component';
import { ContactComponent } from './features/pages/contact/contact.component';
import { FooterComponent } from './features/pages/footer/footer.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'recipe-list', component: RecipeListComponent },
  { path: 'details/:id', component: RecipeDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistreComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'contact', component: ContactComponent }
];
