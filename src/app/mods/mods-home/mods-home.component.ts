import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent {
  isModalOpen: boolean = false;
  items = [
    {
      title: 'Why is the sky blue',
      content:
        'The sky is blue because it is always blue and it never gets gray in greece',
    },
    {
      title: 'What is the situation in Greece',
      content: 'The situation in greece is and always has been amazing!',
    },
    {
      title: 'How dark is the night',
      content: 'It is really dark becuase it is winter',
    },
    {
      title: 'There are three types of pandomimas',
      content: 'Silent, spoken and mimic',
    },
    {
      title: 'Future telling is not a thing',
      content: 'There are only those things that matter to us.',
    },
  ];

  onClick() {
    this.isModalOpen = !this.isModalOpen;
  }
}
