import { OptionService } from '../shared/services/option.service';
import { Http } from '@angular/http';
import { CepService } from '../shared/services/cep.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { SendserverService } from '../shared/services/sendserver.service';

@Component({
  selector: 'app-form-cadastro-reativo',
  templateUrl: './form-cadastro-reativo.component.html',
  styleUrls: ['./form-cadastro-reativo.component.css']
})
export class FormCadastroReativoComponent implements OnInit {

  formulario: FormGroup;
  sexoOp: any[];
  teste: any = [];
  constructor(
    private formBuilder: FormBuilder,
    private cepService: CepService,
    private http: Http,
    private optionService: OptionService,
    private sendServer: SendserverService
  ) { }

  ngOnInit() {
    this.sexoOp = this.optionService.getSexo();
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      nome_mae: [null, Validators.required],
      data_nasc: [null, Validators.required],
      rg: [null, Validators.required],
      cpf: [null, Validators.required],
      sexo: [''],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero_casa: [null, Validators.required],
        complemento: [null],
        nome_rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });
  }

  onSubmit(){
    if (this.formulario.valid)
    {
      console.log('Formulario válido');
      this.sendServer.sendDadosForm(this.formulario)
        .subscribe(dados => {
          JSON.stringify(dados);
        });
    }
    else
    {
      console.log('Formulário inválido');
      this.verificaValidacoesForm (this.formulario);
    }
  /*  this.http.get('/posts')
      .pipe(map((posts) => posts))
      .subscribe(posts => {
        this.teste = posts;
      });
      */
  }

  verificaValidacoesForm(formgroup: FormGroup)
  {
    Object.keys(formgroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formgroup.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup)
      {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  isValidTouched(campo: string)
  {
    return (!this.formulario.get(campo).valid && this.formulario.get(campo).dirty);
  }

  aplicaIsInvalid(campo: string){
    return {
      'is-invalid': this.isValidTouched(campo)
    };
  }

  aplicaIsInvalidFeedBack(campo: string)
  {
    return {
      'invalid-feedback': [
        this.isValidTouched(campo) ||
        this.validaRG() ||
        this.validaCEP() ||
        this.validaCPF()
      ]
    };
  }

  validaRG(){
    const RegEp = /\d{7}/;
    return (RegEp.test(this.formulario.get('rg').value));
  }

  validaCPF(){
    const RegEp = /\d{11}/;
    return (RegEp.test(this.formulario.get('cpf').value));
  }

  validaCEP()
  {
    /*if (this.formulario.get('cep').value != null)
    {
      return this.cepService.validaCEP(this.formulario.get('cep').value);
    }*/
  }

  consultaCEP()
  {
    const numcep = this.formulario.get('endereco.cep').value;
    if (numcep != null && numcep !== '')
    {
        this.resetaDadosForm();
        this.cepService.consultaCEP(numcep)
          .subscribe(dados => this.populaDadosForm(dados));
    }
  }

  populaDadosForm(dados)
  {
    this.formulario.patchValue({
      endereco:{
        complemento: dados.complemento ,
        nome_rua: dados.logradouro,
        bairro: dados.bairro ,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosForm(){
    this.formulario.patchValue({
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
