import { CoursesSevice } from './courses.service';

import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ 'Title: ' + title }}</h2>
    <button class="btn btn-primary">save</button>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
  `,
})
export class CoursesComponent {
  title = 'List Of Courses';
  courses;
  constructor(service: CoursesSevice) {
    this.courses = service.getCourses();
  }
}
