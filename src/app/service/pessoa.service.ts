import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environments';
import { IPessoa } from 'src/app/models/IPessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private httpClient: HttpClient) { }

  save(pessoa: IPessoa):Observable<IPessoa> {
    const url = `${API_PATH}pessoaItem`;
    return this.httpClient.post<IPessoa>(url, pessoa);
  }

}
