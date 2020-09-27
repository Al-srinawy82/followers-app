import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeTraversalOpratorComponent } from './safe-traversal-oprator.component';

describe('SafeTraversalOpratorComponent', () => {
  let component: SafeTraversalOpratorComponent;
  let fixture: ComponentFixture<SafeTraversalOpratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeTraversalOpratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeTraversalOpratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
