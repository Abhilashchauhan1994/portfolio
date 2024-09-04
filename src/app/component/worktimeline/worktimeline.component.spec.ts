import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorktimelineComponent } from './worktimeline.component';

describe('WorktimelineComponent', () => {
  let component: WorktimelineComponent;
  let fixture: ComponentFixture<WorktimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorktimelineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorktimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
