import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TeacerCompComponent } from './teahcer-comp.component';

describe('TeacherCompComponent', () => {
  let component: TeacherCompComponent;
  let fixture: ComponentFixture<TeacherCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
