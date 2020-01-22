import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceOffHomeComponent } from './dance-off-home.component';

describe('DanceOffHomeComponent', () => {
  let component: DanceOffHomeComponent;
  let fixture: ComponentFixture<DanceOffHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanceOffHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceOffHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
