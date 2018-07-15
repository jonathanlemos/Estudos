import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blur',
  templateUrl: './blur.component.html',
  styleUrls: ['./blur.component.css']
})
export class BlurComponent implements OnInit {

  idade:number = 0;
  constructor() { }

  ngOnInit() {
  }

  verIdade(idade:number):void{
    let ano = new Date();
    this.idade = ano.getFullYear() - idade;
  }

}
