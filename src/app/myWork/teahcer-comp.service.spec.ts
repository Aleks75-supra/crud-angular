import { TestBed } from '@angular/core/testing';
import { Teacher } from '..models/teacher';
import { TeacerCompService } from './teacer-comp.service';
import { Router} from '@angular/router'



describe('TeacerCompService', () => {
  let service: TeacerCompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacerCompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
