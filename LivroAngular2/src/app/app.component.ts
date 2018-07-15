import { Component } from '@angular/core';  
import { AlertaService } from './alerta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Angular 2';
  foto :string  = 'favicon.ico';
  desenvolvimento:string [] = ['Livro Angular 2', '-JavaScript', 'TypeScript', 'HTML', 'CSS'];
  valor:string;

  msgAlerta(): void{
    alert("Angular 2");
  }

  constructor(private service: AlertaService){  
  }

  enviarMSG(): void{
    this.service.msgAlerta();
  }

  valorPassado(valorPassado:string){
      this.valor = valorPassado;
  }
}
