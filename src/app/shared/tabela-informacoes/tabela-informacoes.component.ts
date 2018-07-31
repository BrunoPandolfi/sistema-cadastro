import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabela-informacoes',
  templateUrl: './tabela-informacoes.component.html',
  styleUrls: ['./tabela-informacoes.component.css']
})
export class TabelaInformacoesComponent implements OnInit {

  @Input() form;

  constructor() { }

  ngOnInit() {
  }

}
