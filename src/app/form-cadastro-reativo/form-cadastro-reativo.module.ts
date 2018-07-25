import { OnlynumberDirective } from './../formulario-cadastro/onlynumber.directive';
import { FormCadastroReativoComponent } from './form-cadastro-reativo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [FormCadastroReativoComponent]
})
export class FormCadastroReativoModule { }
