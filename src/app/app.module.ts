import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './composants/acceuil/acceuil.component';
import { ListmaterielComponent } from './composants/informatique/listmateriel/listmateriel.component';
import { MaterielComponent } from './composants/informatique/materiel/materiel.component';
import { DetailmaterielComponent } from './composants/informatique/detailmateriel/detailmateriel.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ListmaterielComponent,
    MaterielComponent,
    DetailmaterielComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
