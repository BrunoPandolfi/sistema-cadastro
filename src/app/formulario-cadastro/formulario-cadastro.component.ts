import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { NgModelGroup, NgModel, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.css']
})
export class FormularioCadastroComponent implements OnInit {

  aluno: any = {};
  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(form){
    //console.log(controls['endereco']);
    if (form.valid)
    {
      console.log('Formuario válido');
      this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
      .pipe(map(res => res))
      .subscribe(dados => {
        console.log(dados);
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

  validaCEP(campo){
    const RegEp = /\d{8}/;
    return (RegEp.test(campo.value));
  }

  consultaCEP(cep, form)
  {
    // Nova variável "cep" somente com dígitos.
    //cep = cep.replace(/\D/g, '');

    // Verifica se campo cep possui valor informado.
    console.log(this.validaCEP(cep));

    if (cep !== '')
    {
      if (this.validaCEP(cep)) {

        console.log("Entrou");

          // Expressão regular para validar o CEP.
          //const validacep = /^[0-9]{8}$/;

          // Valida o formato do CEP.
          //if(validacep.test(cep)) {

            this.resetaDadosForm(form);

            this.http.get(`//viacep.com.br/ws/${cep.value}/json`)
            .pipe(map(dados => dados.json()))
            .subscribe(dados => this.populaDadosForm(dados, form));
          //}
      }
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
