import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from '../shared/services/backend.service';

@Component({
  selector: 'app-tabela-informacoes',
  templateUrl: './tabela-informacoes.component.html',
  styleUrls: ['./tabela-informacoes.component.css']
})
export class TabelaInformacoesComponent implements OnInit {

  colInfo: string[] = ['ID', 'CPF', 'Nome', 'Nome da mãe', 'Data Nasc.', 'RG', 'Sexo'];
  listaPessoas: any = [];

  constructor(
    private backendService: BackendService
  ) { }

  ngOnInit() {
    this.backendService.getPessoas()
        .subscribe(dados => {
            this.listaPessoas = dados;
        });
  }

}
