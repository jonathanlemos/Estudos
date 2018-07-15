import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-keyupEnter',
  templateUrl: './ng-keyupEnter.component.html',
  styleUrls: ['./ng-keyupEnter.component.css']
})
export class NgKeyupEnterComponent implements OnInit {

  habilitarBotao: boolean = false;
  valores: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  adicionar(conteudo:string):void{
    this.valores.push(conteudo);
  }

}
