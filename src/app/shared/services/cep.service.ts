import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private httpClient: HttpClient) { }

  consultaCEP(cep: string)
  {
    if (cep !== '')
    {
      if (this.validaCEP(cep))
      {
        return this.httpClient.get(`//viacep.com.br/ws/${cep}/json`);
      }
    }

    return of ({});
  }

  validaCEP(cep: string)
  {
    if (cep != null || cep !== '')
    {
      const RegEp = /\d{8}/;
      return (RegEp.test(cep));
    }
  }
}
