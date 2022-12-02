import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './cards/cards.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { MoviesComponent } from './movies/movies.component';
import { CartComponent } from './cart/cart.component';
import { ButtonsComponent } from './buttons/buttons.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsComponent,
    ContactoComponent,
    CategoriasComponent,
    MoviesComponent,
    CartComponent,
    ButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
