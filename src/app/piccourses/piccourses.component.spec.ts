import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiccoursesComponent } from './piccourses.component';

describe('PiccoursesComponent', () => {
  let component: PiccoursesComponent;
  let fixture: ComponentFixture<PiccoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiccoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiccoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
