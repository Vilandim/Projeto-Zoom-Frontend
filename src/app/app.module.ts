import { GuardAuthGuard } from './guard-auth.guard';
import { AuthService } from './auth.service';
import { ApiServiceProfService } from './api-service-prof.service';
import { ApiserviceService } from './apiservice.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';




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
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { CadastroComplementarComponent } from './cadastro-complementar/cadastro-complementar.component';
import { CategoriaCursosComponent } from './categoria-cursos/categoria-cursos.component';
import { ApiServiceCursosService } from './api-service-cursos.service';
//import { AuthInterceptor } from './auth.interceptor';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { AuthInterceptor } from './auth.interceptor';
import { AtualizacaoCadastroComponent } from './atualizacao-cadastro/atualizacao-cadastro.component';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';



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
    CursoEspecificoComponent,
    CadastroAlunoComponent,
    CadastroProfessorComponent,
    CadastroComplementarComponent,
    CategoriaCursosComponent,
    MeusDadosComponent,
    AtualizacaoCadastroComponent,
    CriarCursoComponent


  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AutocompleteLibModule

  ],
  providers: [ApiserviceService, ApiServiceCursosService, ApiServiceProfService, AuthService, GuardAuthGuard, {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fab, far, fas)
  }
 }
