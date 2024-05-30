import { Component, EventEmitter, Input} from '@angular/core';
import { Task } from '../../interfaces/task';


@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent {

  @Input() tareaSeleccionada !: Task
}
