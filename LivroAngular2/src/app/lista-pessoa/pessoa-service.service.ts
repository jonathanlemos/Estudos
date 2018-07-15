import { Injectable } from '@angular/core';

@Injectable()
export class PessoaServiceService {

  nomePessoas: string[] = ['Sergio', 'Jonathan', 'lemos'];

  constructor() { }

  alerta(): void{
    alert("Livro Angular");
  }

  getPessoas(): string []{
    return this.nomePessoas;
  }

  setPessoas(nome: string): void{
    this.nomePessoas.push(nome);
  }

}
