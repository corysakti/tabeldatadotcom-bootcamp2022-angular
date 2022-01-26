import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptindukComponent } from './deptinduk.component';

describe('DeptindukComponent', () => {
  let component: DeptindukComponent;
  let fixture: ComponentFixture<DeptindukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptindukComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptindukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
