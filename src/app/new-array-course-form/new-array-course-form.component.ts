import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-array-course-form',
  templateUrl: './new-array-course-form.component.html',
  styleUrls: ['./new-array-course-form.component.css'],
})
export class NewArrayCourseFormComponent {
  form = new FormGroup({
    topics: new FormArray([]),
  });

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }
  get topics() {
    return this.form.get('topics') as FormArray;
  }

  removeTopic(topic: FormControl) {
    let i = this.topics.controls.indexOf(topic);
    this.topics.removeAt(i);
  }
}
