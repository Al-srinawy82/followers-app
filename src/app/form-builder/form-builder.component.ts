import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent {
  form;
  constructor(fB: FormBuilder) {
    this.form = fB.group({
      name: ['', Validators.required],
      contact: fB.group({
        email: [],
        phone: [],
      }),
      topics: fB.array([]),
    });
  }
}
