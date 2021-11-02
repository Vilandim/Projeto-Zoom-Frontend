import { Routes } from '@angular/router'

import { PaginaSobreComponent } from './pagina-sobre/pagina-sobre.component'
import { CursosComponent } from './cursos/cursos.component'
import { CadastroComponent } from './cadastro/cadastro.component'
import { LoginComponent } from './login/login.component'
import { PainelComponent } from './painel/painel.component'
import { SejaEducadorComponent } from './seja-educador/seja-educador.component'
import { CursoEspecificoComponent } from './curso-especifico/curso-especifico.component'

export const ROUTES: Routes = [
  {path: '' , component: PainelComponent},
  {path: 'sobre', component: PaginaSobreComponent },
  {path: 'cursos', component: CursosComponent },
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: "seja-educador", component: SejaEducadorComponent},
  {path: 'curso-especifico', component: CursoEspecificoComponent}

]
