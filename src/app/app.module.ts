import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/pages/home/home.component';
import { CharacterDetailsComponent } from './components/pages/character-details/character-details.component';
import { CharacterListComponent } from './components/pages/home/character-list/character-list.component';
import { CharacterCardComponent } from './components/pages/home/character-card/character-card.component';
import { PaginatorComponent } from './components/atoms/paginator/paginator.component';
import { HeaderComponent } from './components/atoms/header/header.component';
import { SpinnerComponent } from './components/atoms/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterDetailsComponent,
    CharacterListComponent,
    CharacterCardComponent,
    PaginatorComponent,
    HeaderComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
