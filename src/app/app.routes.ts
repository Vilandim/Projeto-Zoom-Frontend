import { CriarAulaComponent } from './criar-aula/criar-aula.component';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { AtualizacaoCadastroComponent } from './atualizacao-cadastro/atualizacao-cadastro.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { GuardAuthGuard } from './guard-auth.guard';
import { CategoriaCursosComponent } from './categoria-cursos/categoria-cursos.component';
import { CadastroComplementarComponent } from './cadastro-complementar/cadastro-complementar.component';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { Routes } from '@angular/router'

import { PaginaSobreComponent } from './pagina-sobre/pagina-sobre.component'
import { CursosComponent } from './cursos/cursos.component'
import { CadastroComponent } from './cadastro/cadastro.component'
import { LoginComponent } from './login/login.component'
import { PainelComponent } from './painel/painel.component'
import { SejaEducadorComponent } from './seja-educador/seja-educador.component'
import { CursoEspecificoComponent } from './curso-especifico/curso-especifico.component'
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';

export const ROUTES: Routes = [
  {path: '' , component: PainelComponent},
  {path: 'sobre', component: PaginaSobreComponent },
  {path: 'cursos/:id', component: CursosComponent },
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: "seja-educador", component: SejaEducadorComponent},
  {path: 'curso-especifico/:id', component: CursoEspecificoComponent, canActivate: [GuardAuthGuard]},
  {path: 'cadastro-aluno', component: CadastroAlunoComponent},
  {path: 'cadastro-professor', component: CadastroProfessorComponent},
  {path: 'cadastro-complementar', component: CadastroComplementarComponent},
  {path: 'categoria-curso/:id', component: CategoriaCursosComponent},
  {path: 'meusDados', component: MeusDadosComponent},
  {path: 'atualizacao-usuario/:id', component: AtualizacaoCadastroComponent},
  {path: 'criar-curso/:id', component: CriarCursoComponent},
  {path: 'criar-aula/:id', component: CriarAulaComponent}


]
