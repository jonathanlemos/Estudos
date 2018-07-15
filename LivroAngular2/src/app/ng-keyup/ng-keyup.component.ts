import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-keyup',
  templateUrl: './ng-keyup.component.html',
  styleUrls: ['./ng-keyup.component.css']
})
export class NgKeyupComponent implements OnInit {

  habilitarBotao: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  validaSenha(senha:string):void{
    senha.length >= 5 ? this.habilitarBotao = true : this.habilitarBotao = false;
  }

  gravarSenha(senha:string):void{
    alert('Sua senha é ' + senha);
  }



}
