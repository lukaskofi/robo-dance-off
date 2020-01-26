import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef
} from '@angular/core';
import { Robot, RobotTeam } from '../../state/robots.model';
import { CompetitionService } from '../../services/competition.service';
import * as _ from 'lodash';
import { Observable, timer } from 'rxjs';
import { DanceOffResult, DanceOffResults } from '../../state';
import { map, take } from 'rxjs/operators';
import { teamCriteria } from 'src/app/constants/competition';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'rbo-dance-off-stage',
  templateUrl: './dance-off-stage.component.html',
  styleUrls: ['./dance-off-stage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DanceOffStageComponent implements OnInit {
  constructor(
    private competitionService: CompetitionService,
    private titleService: TitleService,
    private changeDetector: ChangeDetectorRef
  ) {}

  @Input()
  public robots: Robot[];

  public leftTeam: RobotTeam;

  public rightTeam: RobotTeam;

  public dancing = false;

  public danceResult$: Observable<DanceOffResult>;

  public get teamsReady(): boolean {
    return !(_.isNull(this.leftTeam) && _.isNull(this.rightTeam));
  }

  public get readyToDance(): boolean {
    return (
      this.teamsReady &&
      !_.isEmpty(this.leftTeam.name) &&
      !_.isEmpty(this.rightTeam.name)
    );
  }

  public performDanceCompetition(): void {
    const results = this.competitionService.calculateTeamDanceOff(
      this.leftTeam,
      this.rightTeam
    );
    this.danceResult$ = this.constructResultObservable$(results);
    this.dancing = true;
    this.titleService.setTitle('DANCE!');
    this.changeDetector.markForCheck();
  }

  public constructResultObservable$(
    results: DanceOffResults,
    delay: number = 2000
  ): Observable<DanceOffResult> {
    return timer(0, delay).pipe(
      take(teamCriteria.size + 1),
      map(index => {
        return results.danceoffs[index];
      })
    );
  }

  public ngOnInit(): void {
    this.titleService.setTitle('Team Details');

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
