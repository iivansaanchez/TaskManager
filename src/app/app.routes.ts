import { Routes } from '@angular/router';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskDetailComponent } from './task/task-detail/task-detail.component';
import { TaskFormComponent } from './task/task-form/task-form.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [

    {path:'', component: HomeComponent},
    {path:'tasks', component: TaskListComponent,
        children: [
            {path:':id',component:TaskDetailComponent}
        ]},
    {path:'add', component: TaskFormComponent},
];
