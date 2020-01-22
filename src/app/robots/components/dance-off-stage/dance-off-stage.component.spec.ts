import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceOffStageComponent } from './dance-off-stage.component';

describe('DanceOffStageComponent', () => {
  let component: DanceOffStageComponent;
  let fixture: ComponentFixture<DanceOffStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanceOffStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceOffStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
