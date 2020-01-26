import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotDuelComponent } from './robot-duel.component';

describe('RobotDuelComponent', () => {
  let component: RobotDuelComponent;
  let fixture: ComponentFixture<RobotDuelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotDuelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotDuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
