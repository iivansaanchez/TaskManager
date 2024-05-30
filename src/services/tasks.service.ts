import { Task } from "../app/interfaces/task";


export class TasksService {

    //Creamos una lista vacia de task
    private task: Task[] = [];

    //Almacenamos en una variable la url del server-json
    private url: string = "http://localhost:3000/tasks";

    

}