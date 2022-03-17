import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { RodapeComponent } from './rodape/rodape.component';
import { BtnDirective } from './btn.directive';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TarefaComponent,
    RodapeComponent,
    BtnDirective,
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
