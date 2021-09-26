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
  darkMode = false;

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

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.body.classList.add("app-dark");
    }
    else {
      document.body.classList.remove("app-dark");
    }
  }
}
