import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {


  itemTarefa: Array<string> = []

  @Output() eventoExclusao: EventEmitter<any> = new EventEmitter<any>() 

  @ViewChild(InputComponent) conteudo!: InputComponent 
  constructor() { }

  ngOnInit(): void {

    this.itemTarefa = JSON.parse(localStorage.getItem('tarefas') || '[]')

  }

  enviaEventoButao(i: number): void{
    this.eventoExclusao.emit(i)
  }

  

  
}
