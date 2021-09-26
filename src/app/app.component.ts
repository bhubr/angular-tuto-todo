import { Component } from '@angular/core';

interface Task {
  title: string;
  createdAt: Date;
  done: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];
  taskTitle = '';

  addTask() {
    const newTask: Task = {
      title: this.taskTitle,
      createdAt: new Date(),
      done: false,
    }
    this.tasks.push(newTask);
    this.taskTitle = '';
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
