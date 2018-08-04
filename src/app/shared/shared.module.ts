import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { OnlynumberDirective } from './diretivas/onlynumber.directive';
import { AlertaErroComponent } from './alerta-erro/alerta-erro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    OnlynumberDirective,
    AlertaErroComponent
  ],
  exports: [
    OnlynumberDirective,
    AlertaErroComponent
  ]
})
export class SharedModule { }
