import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencematrixComponent } from './experiencematrix.component';

describe('ExperiencematrixComponent', () => {
  let component: ExperiencematrixComponent;
  let fixture: ComponentFixture<ExperiencematrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencematrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencematrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
