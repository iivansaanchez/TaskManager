import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { Task } from '../../interfaces/task';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskDetailComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  //En primer lugar, creamos un evento que capture la tarea selecionada
  @Output() tareaSeleccionada = new EventEmitter<Task>();

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

  //Esta funcion sirve para llamar al evento y ejecutarlo
  seleccionarTarea(task: Task): void{
    this.tareaSeleccionada.emit(task);
  }
}
