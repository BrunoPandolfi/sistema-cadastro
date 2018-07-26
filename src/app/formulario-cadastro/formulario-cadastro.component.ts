import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.css']
})
export class FormularioCadastroComponent implements OnInit {

  aluno: any = {};
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(form.value);
  }

  isValidTouched(campo){
    return (!campo.valid && campo.touched);
  }

  validaCPF(cpf, form){
    const RegEp = /\d{11}/;
    console.log(RegEp.test(cpf.value));
    if (RegEp.test(cpf.value))
    {
      console.log(cpf.value);
    }
  }

}
