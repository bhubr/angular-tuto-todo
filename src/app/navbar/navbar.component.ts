import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() darkMode!: boolean;
  @Output() toggleDark = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleDarkMode() {
    this.toggleDark.emit();
  }

}
