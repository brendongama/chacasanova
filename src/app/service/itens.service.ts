import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environments';
import { IItens } from '../models/IItens';

@Injectable({
  providedIn: 'root'
})
export class ItensService {

  constructor(private httpClient: HttpClient) { }

  obterTodos(): Observable<IItens[]> {
    return this.httpClient.get<IItens[]>(`${API_PATH}itens`);
  }

  findById(id : any):Observable<IItens>{
    const url = `${API_PATH}itens/${id}`;
    return this.httpClient.get<IItens>(url);
  }

  update(item: IItens):Observable<IItens> {
    const url = `${API_PATH}itens/${item.id}`;
    return this.httpClient.put<IItens>(url, item);
  }

}
