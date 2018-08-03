import { OptionService } from '../shared/services/option.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { CepService } from '../shared/services/cep.service';
import { SendserverService } from '../shared/services/sendserver.service';

@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.css']
})
export class FormularioCadastroComponent implements OnInit {

  aluno: any = {};
  sexoOp: any[];
  constructor(
    private http: Http,
    private cepService: CepService,
    private optionService: OptionService,
    private sendServer: SendserverService
  ) { }

  ngOnInit() {
    this.sexoOp = this.optionService.getSexo();
  }

  onSubmit(form){
    //console.log(controls['endereco']);
    if (form.valid)
    {
      console.log('Formuario válido');
      this.sendServer.sendDadosForm(form)
        .subscribe((err) => {
          if(err){
            console.log(err);
          };
          console.log("Success");
        });
    }
    else {
      console.log('Formulário inválido');
      this.verificaValidacoesForm (form);
    }
  }

  verificaValidacoesForm(form)
  {
    Object.keys(form.controls).forEach(campo => {
      console.log(campo);
      const controle = form.controls[campo];
      controle.markAsDirty();
      if (controle instanceof FormGroup)
      {
        this.verificaValidacoesForm(controle);
        //console.log("Entrou");
      }
    });
  }

  isValidTouched(campo){
    return (!campo.valid && campo.dirty);
  }

  validaCPF(campo){
    const RegEp = /\d{11}/;
    return (RegEp.test(campo.value));
  }

  validaRG(campo){
    const RegEp = /\d{7}/;
    return (RegEp.test(campo.value));
  }

  validaCEP(cep: string)
  {
    return this.cepService.validaCEP(cep);
  }

  consultaCEP(cep, form)
  {
    const numcep = cep.value;
    if (cep !== null || cep !== '')
    {
        this.resetaDadosForm(form);
        this.cepService.consultaCEP(numcep)
          .subscribe(dados => this.populaDadosForm(dados, form));
    }
  }

  populaDadosForm(dados, formulario)
  {
    /*formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email,
      endereco: {
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento ,
        rua: dados.logradouro,
        bairro: dados.bairro ,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });*/

    formulario.form.patchValue({
      endereco:{
        complemento: dados.complemento ,
        nome_rua: dados.logradouro,
        bairro: dados.bairro ,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosForm(formulario){
    formulario.form.patchValue({
      endereco: {
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

}
