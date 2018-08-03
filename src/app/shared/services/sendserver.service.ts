import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendserverService {

  constructor(
    private httpClient: HttpClient
  ) { }

  sendDadosForm (form)
  {
    return this.httpClient.post('/cadastrarPessoa', form.value)
      .pipe(map(res => res));
  }

  getDadosForm (){
    return this.httpClient.get('/teste')
      .pipe(map((posts) => posts));
  }
}
