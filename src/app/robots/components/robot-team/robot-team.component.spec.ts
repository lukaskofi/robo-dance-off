import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotTeamComponent } from './robot-team.component';

describe('RobotTeamComponent', () => {
  let component: RobotTeamComponent;
  let fixture: ComponentFixture<RobotTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
