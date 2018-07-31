import { FormCadastroReativoComponent } from './form-cadastro-reativo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    FormCadastroReativoComponent
  ]
})
export class FormCadastroReativoModule { }
