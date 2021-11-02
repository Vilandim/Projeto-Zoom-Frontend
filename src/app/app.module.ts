import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { PainelComponent } from './painel/painel.component';
import { RodapeComponent } from './rodape/rodape.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginaSobreComponent } from './pagina-sobre/pagina-sobre.component';
import { CursosComponent } from './cursos/cursos.component';
import { SejaEducadorComponent } from './seja-educador/seja-educador.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { CursoEspecificoComponent } from './curso-especifico/curso-especifico.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PainelComponent,
    RodapeComponent,
    PaginaSobreComponent,
    CursosComponent,
    SejaEducadorComponent,
    CadastroComponent,
    LoginComponent,
    CursoEspecificoComponent

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fab, far, fas)
  }
 }
