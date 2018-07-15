import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa.component';
import { AlertaService } from './alerta.service';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { NgKeyupComponent } from './ng-keyup/ng-keyup.component';
import { NgKeyupEnterComponent } from './ng-keyupEnter/ng-keyupEnter.component';
import { BlurComponent } from './blur/blur.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DiComponent } from './di/di.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPessoaComponent,
    InterpolationBindingComponent,
    PropertyBindingComponent,
    TwoWayBindingComponent,
    NgIfComponent,
    NgSwitchCaseComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    NgContentComponent,
    EventBindingComponent,
    NgKeyupComponent,
    NgKeyupEnterComponent,
    BlurComponent,
    InputOutputComponent,
    FormularioComponent,
    DiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AlertaService],
  bootstrap: [AppComponent]
})
export class AppModule { }