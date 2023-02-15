import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IItens } from '../models/IItens';
import { ItensService } from '../service/itens.service';

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
    imagem: ''
  }

  nome = new FormControl('');
  ativo = new FormControl('');
  imagem = new FormControl('');

  constructor( private router: Router, private service: ItensService, private route: ActivatedRoute ){}

  ngOnInit(): void {
    this.id_item = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.service.findById(this.id_item).subscribe(resposta => {
      this.item = resposta;
      console.log(this.item);
    })
  }

  save(): void {
    this.router.navigate(['']) 
  }

  cancel(): void {
    this.router.navigate(['']) 
  }
 
}
 