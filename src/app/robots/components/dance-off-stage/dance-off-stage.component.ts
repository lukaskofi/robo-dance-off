
import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { CompetitionService } from '../../services';
import { TitleService } from 'src/app/shared/services';
import { MatSnackBar } from '@angular/material';
import { Robot, RobotTeam, DanceOffResult, TeamResult, DanceOffResults } from '../../state';
import { Observable, timer } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';
import { teamCriteria } from 'src/app/constants/competition';
import * as _ from 'lodash';

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
    private snackBar: MatSnackBar,
    private changeDetector: ChangeDetectorRef
  ) {}

  @Input()
  public robots: Robot[];

  public leftTeam: RobotTeam;

  public rightTeam: RobotTeam;

  public dancing = false;

  public danceResult$: Observable<DanceOffResult>;

  public teamResult: TeamResult;
  public danceOffFinished = false;

  public performDanceCompetition(): void {
    const results = this.competitionService.calculateTeamDanceOff(
      this.leftTeam,
      this.rightTeam
    );
    this.teamResult = results.teamWise;
    this.danceOffFinished = false;
    this.leftTeam.score = 0;
    this.rightTeam.score = 0;
    this.danceResult$ = this.constructResultObservable$(results.results);
    this.dancing = true;
    this.titleService.setTitle('DANCE!');
    this.changeDetector.markForCheck();
  }

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

  public constructResultObservable$(
    results: DanceOffResults,
    delay: number = 2000
  ): Observable<DanceOffResult> {
    return timer(0, delay).pipe(
      take(teamCriteria.size + 1),
      map(index => {
        return results.danceoffs[index];
      }),
      tap(result => {
        if (result) {
          if (this.isRobotOnLeftTeam(result.winner)) {
            this.leftTeam.score += 1;
          } else {
            this.rightTeam.score += 1;
          }

          console.log(this.leftTeam, this.rightTeam);
        } else {
          const winner = this.leftTeam.score > this.rightTeam.score ? this.leftTeam : this.rightTeam;
          this.danceOffFinished = true;
          this.snackBar.open(`${winner.name} wins!`);
        }
      }),
    );
  }

  public restart(): void {
    this.initializeDanceOff();
  }

  public ngOnInit(): void {
    this.initializeDanceOff();
  }

  private isRobotOnLeftTeam(robotId: number): boolean {
    return this.leftTeam.robots.findIndex(robot => robot.id === robotId) !== -1;
  }

  private initializeDanceOff() {
    this.titleService.setTitle('Team Details');
    this.dancing = false;
    this.danceResult$ = null;
    this.danceOffFinished = false;
    this.teamResult = null;
    const lineups = this.competitionService.createOpposingTeams(this.robots);
    if (_.isNull(lineups)) {
      this.snackBar.open(
        'Unable to create lineup. Please refresh to try again.'
      );
      return;
    }

    this.leftTeam = {
      name: '',
      robots: lineups[0],
      score: -1
    };

    this.rightTeam = {
      name: '',
      robots: lineups[1],
      score: -1
    };
  }
}
