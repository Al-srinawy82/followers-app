import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  courses = [
    { id: 1, name: 'coures1' },
    { id: 2, name: 'coures2' },
    { id: 3, name: 'coures3' },
  ];
  onAdd() {
    this.courses.push({ id: 4, name: 'coures4' });
  }
  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course) {
    course.name = 'UPDATED';
  }
}
