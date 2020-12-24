import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './composants/acceuil/acceuil.component';
import { ContactComponent } from './composants/contact/contact.component';
import { Error404Component } from './composants/error404/error404.component';
import { DetailmaterielComponent } from './composants/informatique/detailmateriel/detailmateriel.component';
import { ListmaterielComponent } from './composants/informatique/listmateriel/listmateriel.component';

const routes: Routes = [
  {path:'acceuil', component:AcceuilComponent},
  {path:'informatique', component:ListmaterielComponent},
  {path:'informatique/:id', component:DetailmaterielComponent},
  {path:'contact', component:ContactComponent},
  {path:'', redirectTo:'acceuil',pathMatch:'full'},
  {path:'**', component:Error404Component}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
