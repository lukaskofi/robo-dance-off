import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotAvatarStripComponent } from './robot-avatar-strip.component';

describe('RobotAvatarStripComponent', () => {
  let component: RobotAvatarStripComponent;
  let fixture: ComponentFixture<RobotAvatarStripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotAvatarStripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotAvatarStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
