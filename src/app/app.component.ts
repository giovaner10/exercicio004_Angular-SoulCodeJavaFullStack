import { Component, ViewChild } from '@angular/core';
import { RodapeComponent } from './rodape/rodape.component';
import { TarefaComponent } from './tarefa/tarefa.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDo_List';

  arrayParaStorage: Array<string> = []
  mostraAlert: boolean = false;

  @ViewChild (TarefaComponent) tarefa!: TarefaComponent
  @ViewChild (RodapeComponent) rodape!: RodapeComponent

  mandaTarefaStorage(novaTarefa: string){ 

    if(novaTarefa.length > 0){
      this.tarefa.itemTarefa.push(novaTarefa)
  
      localStorage.setItem('tarefas', JSON.stringify(this.tarefa.itemTarefa))
  
      this.rodape.arrayAuxiliar = this.tarefa.itemTarefa
    }else(
      this.mostraAlert = !this.mostraAlert
    )
  }

  deletaTarefa(index: number): void{
    
    this.tarefa.itemTarefa.splice(index, 1)
    
    localStorage.setItem('tarefas', JSON.stringify(this.tarefa.itemTarefa))
    
    this.rodape.arrayAuxiliar = this.tarefa.itemTarefa
  }

  //chamar este evento com evento emitido pelo footer
  limpaStorage(): void{

    this.tarefa.itemTarefa.splice(0)

    localStorage.clear()
  }

  tiraAlert(): void{
    this.mostraAlert = !this.mostraAlert
  }
}
