import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaInformacoesComponent} from './tabela-informacoes.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    TabelaInformacoesComponent
  ],
  exports: [
    TabelaInformacoesComponent
  ]
})
export class TabelaInformacoesModule { }
