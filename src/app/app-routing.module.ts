import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CharacterDetailsComponent } from './components/pages/character-details/character-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    title: 'Hero - Início',
  },
  {
    path: 'character-details/:id',
    component: CharacterDetailsComponent,
    title: 'Hero - Personagem',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
