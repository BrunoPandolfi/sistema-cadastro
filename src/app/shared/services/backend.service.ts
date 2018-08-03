import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getPessoas()
  {
    return this.http.get('/obterPessoasCadastradas');
  }

}
