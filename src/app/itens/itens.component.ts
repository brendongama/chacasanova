import { Component } from '@angular/core';
import { IItens } from '../models/IItens';
import { ItensService } from '../service/itens.service';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent {

  itens: IItens[] = [];

  loading: boolean = false;

  constructor(private itenService: ItensService) {}

  ngOnInit(): void { 
    this.listarTodos();
  }

  listarTodos() {
    this.itenService.obterTodos().subscribe(resposta => {
      this.itens = resposta;
      this.loading = true; 
    }
  )}

}
