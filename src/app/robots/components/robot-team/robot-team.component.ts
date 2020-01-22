import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { RobotTeam } from '../../state/robots.model';

@Component({
  selector: 'rbo-robot-team',
  templateUrl: './robot-team.component.html',
  styleUrls: ['./robot-team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RobotTeamComponent implements OnInit {

  constructor() { }

  @Input()
  @HostBinding('class.left-side')
  public left = false;

  @Input()
  public team: RobotTeam;

  ngOnInit() {
  }

}
