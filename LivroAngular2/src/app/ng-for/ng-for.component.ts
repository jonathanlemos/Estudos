import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  nomes:any [] = [
                  {id:1, nome:"sergio"},
                  {id:2, nome: "jonathan"},
                  {id:3, nome: "lemos"}
                ];
  
  constructor() { }

  ngOnInit() {
  }

  meuSave(index: number, nomes: any){
    return nomes.id;
  }

  atualizar(){
    this.nomes = [
                  {id:1, nome:"sergio"},
                  {id:2, nome: "jonathan"},
                  {id:3, nome: "lemos"},
                  {id:4, nome: "santos"}
                 ];
  }

}
