import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'pets', component: HomeComponent },
  { path: 'pets/new', component: NewComponent },
  { path: 'pets/:id', component: DetailsComponent },
  { path: 'pets/:id/edit', component: EditComponent },
  { path: '', pathMatch: 'full', redirectTo: 'pets' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }