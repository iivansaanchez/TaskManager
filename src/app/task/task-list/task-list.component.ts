import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks = [
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
}
