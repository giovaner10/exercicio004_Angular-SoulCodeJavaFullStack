import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent {

  @Output() enviaEventoExlusao: EventEmitter<any> = new EventEmitter<any>()


  arrayAuxiliar: Array<string> = []

  eventoExlusaoTotal(){
    this.enviaEventoExlusao.emit()
  }

  

}
