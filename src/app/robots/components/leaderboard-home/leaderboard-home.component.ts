import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import { TitleService } from 'src/app/shared/services';
import {
  DanceOffsQuery,
  DanceOffService,
  RobotLeaderboardData,
  DanceOff
} from '../../state';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';

@Component({
  templateUrl: './leaderboard-home.component.html',
  styleUrls: ['./leaderboard-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeaderboardHomeComponent implements OnInit, OnDestroy {
  constructor(
    private titleService: TitleService,
    private danceOffsQuery: DanceOffsQuery,
    private danceOffService: DanceOffService,
    private snackBar: MatSnackBar,
    private changeDetector: ChangeDetectorRef
  ) {}

  public data: Map<number, RobotLeaderboardData>;

  private danceOffSubscription: Subscription;

  public loading = false;

  public get showLeaderboard(): boolean {
    return !_.isNil(this.data) && this.data.size > 0;
  }

  public refresh(): void {
    this.loading = true;
    this.changeDetector.markForCheck();
    this.danceOffService
      .loadResults()
      .then(() => {
        this.concludeLoading();
      })
      .catch(() => {
        this.snackBar.open('Something went wrong. Please try again later.');
        this.concludeLoading();
      });
  }

  public ngOnInit(): void {
    this.titleService.setTitle('Leaderboard');
    this.danceOffSubscription = this.danceOffsQuery
      .selectAll()
      .subscribe(next => {
        this.transformData(next);
      });
    this.refresh();
  }

  public ngOnDestroy(): void {
    if (!_.isNil(this.danceOffSubscription)) {
      this.danceOffSubscription.unsubscribe();
    }
  }

  private concludeLoading(): void {
    this.loading = false;
    this.changeDetector.markForCheck();
  }

  private transformData(danceOffs: DanceOff[]): void {
    if (_.isEmpty(danceOffs)) {
      return;
    }

    this.data = new Map<number, RobotLeaderboardData>();

    for (const danceOff of danceOffs) {
      if (_.isNil(danceOff)) {
        continue;
      }

      let winnerData = this.data.get(danceOff.winner);
      if (_.isNil(winnerData)) {
        winnerData = {
          wins: 0,
          danceOffs: 0
        };
      } else {
        winnerData.danceOffs += 1;
        winnerData.wins += 1;
      }
      this.data.set(danceOff.winner, winnerData);

      let loserData = this.data.get(danceOff.loser);
      if (_.isNil(loserData)) {
        loserData = {
          wins: 0,
          danceOffs: 0
        };
      } else {
        loserData.danceOffs += 1;
      }
      this.data.set(danceOff.loser, loserData);
    }

    this.changeDetector.markForCheck();
  }
}
