import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FotosPokemonComponent } from './components/fotos-pokemon/fotos-pokemon.component';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';
import { DetalheComponent } from './components/detalhe/detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FotosPokemonComponent,
    CardPokemonComponent,
    DetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
