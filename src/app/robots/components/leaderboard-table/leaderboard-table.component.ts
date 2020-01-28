import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { RobotsQuery, RobotLeaderboardData, Robot } from '../../state';
import { MatTableDataSource } from '@angular/material';
import { Order } from '@datorama/akita';

@Component({
  selector: 'rbo-leaderboard-table',
  templateUrl: './leaderboard-table.component.html',
  styleUrls: ['./leaderboard-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeaderboardTableComponent implements OnInit {
  constructor(private robotsQuery: RobotsQuery) {}

  @Input()
  public data: Map<number, RobotLeaderboardData>;

  // sort by wins, then win%
  public robots$ = this.robotsQuery.selectAll({
    sortBy: (a: Robot, b: Robot) => {
      const diff = this.getScore(b.id) - this.getScore(a.id);
      return diff !== 0
        ? diff
        : this.getWinPercent(b.id) - this.getWinPercent(a.id);
    }
  });

  public dataSource = new MatTableDataSource();

  public displayedColumns = ['position', 'score', 'name', 'winPercent'];

  public getScore(id: number): number {
    if (this.data && this.data.get(id)) {
      return this.data.get(id).wins;
    }

    return 0;
  }

  public getWinPercent(id: number): number {
    if (this.data && this.data.get(id)) {
      const robotData = this.data.get(id);
      return robotData.danceOffs > 0 ? robotData.wins / robotData.danceOffs : 0;
    }

    return 0;
  }

  public getWinPercentInfo(id: number): string {
    if (this.data && this.data.get(id)) {
      const robotData = this.data.get(id);
      return `(${robotData.wins} of ${robotData.danceOffs})`;
    }

    return '';
  }

  public ngOnInit(): void {}
}
