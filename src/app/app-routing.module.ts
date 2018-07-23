import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { FormCadastroReativoComponent } from './form-cadastro-reativo/form-cadastro-reativo.component';

const routes: Routes = [
  {path: 'formularioTemplate', component: FormularioCadastroComponent},
  {path: 'formularioReativo', component: FormCadastroReativoComponent},
  {path: '', redirectTo: '/formularioTemplate', pathMatch: 'full'}
];



@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
