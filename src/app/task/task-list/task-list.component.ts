import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { Task } from '../../interfaces/task';
import { TaskFormComponent } from '../task-form/task-form.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskDetailComponent, TaskFormComponent, NavbarComponent, RouterOutlet],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  //En el constructor añadimos router para usarlo luego en la funcion de navegacion
  constructor(private router: Router) {}

  //En primer lugar, creamos un evento que capture la tarea selecionada
  @Output() tareaSeleccionada = new EventEmitter<Task>();
  
  //Esta funcion sirve para llamar al evento y ejecutarlo
  seleccionarTarea(task: Task): void{
    this.tareaSeleccionada.emit(task);
    this.router.navigate(['/tasks', task.id]);
  }

  //Creamos una variable asociada al @Input con el mismo tipo que el objeto que emite el padre
  @Input() tareaAnadida !: Omit<Task, "id">

  @Input() tareaBuscada !: string;

  
  tasks: Task[] = [
    {
      id: 1,
      title: 'Crear Presentación',
      description: 'Preparar la presentación para el proyecto final',
      priority: 'alta',
      status: 'pendiente'
    },
    {
      id: 2,
      title: 'Investigar Angular',
      description: 'Investigar sobre las características de Angular para el proyecto',
      priority: 'media',
      status: 'en progreso'
    },
    {
      id: 3,
      title: 'Implementar Servicios',
      description: 'Implementar servicios para manejar datos en la aplicación',
      priority: 'baja',
      status: 'completada'
    },
    {
      id: 4,
      title: 'Diseñar Base de Datos',
      description: 'Diseñar la estructura de la base de datos para el proyecto',
      priority: 'alta',
      status: 'pendiente'
    }
  ];
  

  //Esta funcion srive para elimiar la tarea
  deleteTask(task: Task): void{
    for(let i = 0; i < this.tasks.length; i++){
      let tarea = this.tasks[i];
      if(tarea.id === task.id){
        this.tasks.splice(i, 1);

      }
    }
  }

  agregarTarea(task: Omit<Task, "id">){
    const newTask: Task = {
      id: this.tasks.length+1,
      ...task
    }
    this.tasks.push(newTask);
  }

  buscarTarea(): Task[] {
    return this.tasks.filter(task => task.title.includes(this.tareaBuscada))
  }
}
