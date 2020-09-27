import { browser } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'piccourses',
  template: `<h2>{{ title }}</h2>
    <img [src]="imageUrl" />
    <table>
      <tr>
        <td [attr.colspan]="colSpan">table</td>
      </tr>
    </table>`,
  styleUrls: ['./piccourses.component.css'],
})
export class PiccoursesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'List Of Courses Pic';
  colSpan = 2;
  imageUrl = 'http://lorempixel.com/400/200';
}
