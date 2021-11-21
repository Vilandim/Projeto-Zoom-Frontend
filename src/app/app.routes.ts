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
  {path: 'cursos', component: CursosComponent },
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: "seja-educador", component: SejaEducadorComponent},
  {path: 'curso-especifico', component: CursoEspecificoComponent},
  {path: 'cadastro-aluno', component: CadastroAlunoComponent},
  {path: 'cadastro-professor', component: CadastroProfessorComponent},
  {path: 'cadastro-complementar', component: CadastroComplementarComponent},
  {path: 'categoria-curso/:id', component: CategoriaCursosComponent}


]
