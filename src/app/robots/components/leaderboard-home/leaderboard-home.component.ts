import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { DanceOffsQuery, DanceOff } from '../../state';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';

@Component({
  templateUrl: './leaderboard-home.component.html',
  styleUrls: ['./leaderboard-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeaderboardHomeComponent implements OnInit, OnDestroy {
  constructor(private titleService: TitleService, private danceOffsQuery: DanceOffsQuery) {}

  public data: { [key: number]: number }; // = {};

  // private danceOffs$ = this.danceOffsQuery.selectAll();
  private danceOffSubscription: Subscription;

  public ngOnInit(): void {
    this.titleService.setTitle('Leaderboard');
    this.danceOffSubscription = this.danceOffsQuery.selectAll().subscribe(
      next => {
        this.processData(next);
      }
    );
  }

  public ngOnDestroy(): void {
    if (! _.isNil(this.danceOffSubscription)) {
      this.danceOffSubscription.unsubscribe();
    }
  }

  private processData(data: DanceOff[]): void {

  }
}
