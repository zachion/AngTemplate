import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent {
  isModalOpen: boolean = false;

  onClick() {
    this.isModalOpen = !this.isModalOpen;
  }
}
