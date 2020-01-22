import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { Robot, RobotTeam } from '../../state/robots.model';
import { CompetitionService } from '../../services/competition.service';
import * as _ from 'lodash';

@Component({
  selector: 'rbo-dance-off-stage',
  templateUrl: './dance-off-stage.component.html',
  styleUrls: ['./dance-off-stage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DanceOffStageComponent implements OnInit {
  constructor(private competitionService: CompetitionService) {}

  @Input()
  public robots: Robot[];

  public leftTeam: RobotTeam;

  public rightTeam: RobotTeam;

  public get teamsReady(): boolean {
    return !(_.isNull(this.leftTeam) && _.isNull(this.rightTeam));
  }

  public get readyToDance(): boolean {
    return this.teamsReady && (! _.isEmpty(this.leftTeam.name)) && (! _.isEmpty(this.rightTeam.name));
  }

  public performDanceCompetition(): void {
    console.log(this.competitionService.createWeightedRandomOutcome(this.leftTeam, this.rightTeam));
  }

  public ngOnInit(): void {
    const lineups = this.competitionService.createOpposingTeams(this.robots);
    if (_.isNull(lineups)) {
      console.error('Unable to create lineup.');
      return;
    }

    this.leftTeam = {
      name: '',
      robots: lineups[0]
    };

    this.rightTeam = {
      name: '',
      robots: lineups[1]
    };
  }
}
