import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendserverService {

  constructor(
    private http: Http
  ) { }

  sendDadosForm (form){
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'applicaation/json');
    return this.http.post('https://127.0.0.1:3000/cadastrarPessoa', JSON.stringify(form.value), headers);
  }
}
