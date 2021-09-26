import { Component } from '@angular/core';

interface Person {
  name: string;
  date: Date;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people: Person[] = [];
  personName = '';

  addPerson() {
    const newPerson = {
      name: this.personName,
      date: new Date()
    }
    this.people.push(newPerson);
    this.personName = '';
  }
}
