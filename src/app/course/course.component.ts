import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-course',
  template: `
    <h2>{{ title }}</h2>

    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
  `,
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title = 'Angular';
  isActive = true;
  email = 'me@example.com';

  onKeyUp() {
    console.log(this.email);
  }
}
