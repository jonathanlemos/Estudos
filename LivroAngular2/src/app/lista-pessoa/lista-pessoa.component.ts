import { Component, OnInit } from '@angular/core';
import { PessoaServiceService } from './pessoa-service.service';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css'],
  providers: [PessoaServiceService]
})
export class ListaPessoaComponent implements OnInit {

  pessoas: string[];
  nome: string = "Jonathan";
  
  constructor(private service:PessoaServiceService) { 
    this.pessoas = service.getPessoas();
  }

  ngOnInit() { }

  enviarNome(): void{
    this.service.setPessoas(this.nome);
   }

}
