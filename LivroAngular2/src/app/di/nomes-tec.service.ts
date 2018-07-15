import { Injectable, Optional } from '@angular/core';
import { MeuLogService } from './meu-log.service';

@Injectable()
export class NomesTecService {

  constructor(@Optional() private meulog:MeuLogService) { }

  getNomesTec(): string[]{
    if(this.meulog){
      this.meulog.setLog('consultou o array de tecnologias.');
    }
    return ['angular 2', 'typescript', 'javascript', 'html5', 'css3', 'desenv Angular2'];
  }



}
