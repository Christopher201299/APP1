import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NAVBARComponent } from './componentes/navbar/navbar.component';
import { GaleriaComponent } from './componentes/pages/galeria/galeria.component';
import { DatosComponent } from './componentes/pages/datos/datos.component';
import { InicioComponent } from './componentes/pages/inicio/inicio.component';
import { MapaComponent } from './componentes/pages/mapa/mapa.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NAVBARComponent,
    GaleriaComponent,
    DatosComponent,
    InicioComponent,
    MapaComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
