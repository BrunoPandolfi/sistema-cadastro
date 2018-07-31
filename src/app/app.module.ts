import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormularioCadastroModule } from './formulario-cadastro/formulario-cadastro.module';
import { FormCadastroReativoModule } from './form-cadastro-reativo/form-cadastro-reativo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormularioCadastroModule,
    FormCadastroReativoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
