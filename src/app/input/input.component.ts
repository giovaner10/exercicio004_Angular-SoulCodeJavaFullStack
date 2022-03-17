import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {


  @Output() eventoBotaoInput: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  enviaEvento(novaTarefa: string): void{
      this.eventoBotaoInput.emit(novaTarefa)
  }



}
