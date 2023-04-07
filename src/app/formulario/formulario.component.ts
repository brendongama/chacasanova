import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IItens } from '../models/IItens';
import { IPessoa } from '../models/IPessoa';
import { ItensService } from '../service/itens.service';
import { PessoaService } from '../service/pessoa.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  id_item = '';

  item: IItens = {
    id: 0,
    nome: '',
    ativo: false,
    imagem: '',
    link : ''
  }

  pessoa: IPessoa = {
    id: 0,
    nome: '',
    item: '',
  }



  nome = new FormControl('');
  pessoaNome = new FormControl('');

  constructor(
     private router: Router, 
     private itemService: ItensService, 
     private pessoaService: PessoaService,
     private route: ActivatedRoute ){}

  ngOnInit(): void {
    this.id_item = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.itemService.findById(this.id_item).subscribe(resposta => {
      this.item = resposta;
    })
  }

  save(): void {
    this.pessoa.item = this.item.nome;
    this.pessoaService.save(this.pessoa).subscribe((resposta) => {
    }) 

      this.item.ativo = false; 
      this.itemService.update(this.item).subscribe((resposta) => {  
        window.open(this.item.link, '_blank');
        this.router.navigate([''])
          .then(() => {
            window.location.reload();
          });          
      })      
      
      
     
  }

  cancel(): void {
    this.router.navigate(['']) 
  }
 
}
 