import { AlertaErroComponent } from './../alerta-erro/alerta-erro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioCadastroComponent } from './formulario-cadastro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FormularioCadastroComponent,
    AlertaErroComponent
  ]
})
export class FormularioCadastroModule { }
