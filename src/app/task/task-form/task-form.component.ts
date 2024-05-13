import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../interfaces/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  //Variable para mostrar el formulario
  mostrarFormulario = false;

  //Creamos un evento @OutPut
  @Output() sendTask = new EventEmitter<Omit<Task, 'id'>()>;

  //Con el omit evitamos que el id se tenga eu introducir
  newTask: Omit<Task, 'id'>= {
    title: "",
    description: "",
    priority: "",
    status: "pendiente"
  }

  //Creamos el metodo addTask: el metodo addTask comprueba que ha recuperado bien los valores
  //lo emite y por ultimo deja vacia de nuevo la varibale newTask
  addTask(){
    if(this.newTask.description && this.newTask.title && this.newTask.priority){
      this.sendTask.emit({...this.newTask});

      this.newTask = {
        title: "",
        description: "",
        priority: "",
        status: "pendiente"
      }
    }
  }


  
}
