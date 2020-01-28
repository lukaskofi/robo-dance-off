import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding
} from '@angular/core';
import { RobotTeam, Robot } from '../../state/robots.model';
import { TeamResult } from '../../state';
import * as _ from 'lodash';

@Component({
  selector: 'rbo-robot-team',
  templateUrl: './robot-team.component.html',
  styleUrls: ['./robot-team.component.scss']
})
export class RobotTeamComponent {
  constructor() {}

  @Input()
  @HostBinding('class.left-side')
  public left = false;

  @Input()
  public teamResult: TeamResult;

  @Input()
  public showRobotResults = false;

  /**
   * Normally, forms should be handled with ReactiveForms,
   * but as the name only needs to be present and will not be saved anywhere,
   * [(ngModel)] for team.name will do...
   */
  @Input()
  public team: RobotTeam;

  public get showScore(): boolean {
    return this.team.score !== -1;
  }

  public getRobotBadge(robot: Robot, index: number) {
    if (_.isNil(this.teamResult) || ! this.showRobotResults) {
      return robot.experience;
    }

    return this.left === this.teamResult[index] ? 'W' : 'L';
  }
}
