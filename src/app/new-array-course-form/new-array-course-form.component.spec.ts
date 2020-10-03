import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArrayCourseFormComponent } from './new-array-course-form.component';

describe('NewArrayCourseFormComponent', () => {
  let component: NewArrayCourseFormComponent;
  let fixture: ComponentFixture<NewArrayCourseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewArrayCourseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArrayCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
