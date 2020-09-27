import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-track-by',
  templateUrl: './ngfor-track-by.component.html',
  styleUrls: ['./ngfor-track-by.component.css'],
})
export class NgforTrackByComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  courses;

  onLoadCourses() {
    this.courses = [
      { id: 1, name: 'coures1' },
      { id: 2, name: 'coures2' },
      { id: 3, name: 'coures3' },
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
