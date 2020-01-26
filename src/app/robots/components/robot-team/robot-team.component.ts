import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding
} from '@angular/core';
import { RobotTeam } from '../../state/robots.model';

@Component({
  selector: 'rbo-robot-team',
  templateUrl: './robot-team.component.html',
  styleUrls: ['./robot-team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RobotTeamComponent {
  constructor() {}

  @Input()
  @HostBinding('class.left-side')
  public left = false;

  @Input()
  public score = -1;

  /**
   * Normally, forms should be handled with ReactiveForms,
   * but as the name only needs to be present and will not be saved anywhere,
   * [(ngModel)] for team.name will do...
   */
  @Input()
  public team: RobotTeam;

  public get showScore(): boolean {
    return this.score !== -1;
  }
}
