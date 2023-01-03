import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
  data = [
    { name: 'James', age: 24, job: 'papatzis', employed: true },
    { name: 'Zach', age: 23, job: 'designer', employed: false },
    { name: 'Matsotsi', age: 44, job: 'trader' , employed: true},
    { name: 'Yaguni', age: 54, job: 'con artist' , employed: true},
  ];

  headers = [
    { key: 'employed', label: 'Has a job?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];
}
