import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptchildComponent } from './deptchild.component';

describe('DeptchildComponent', () => {
  let component: DeptchildComponent;
  let fixture: ComponentFixture<DeptchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
