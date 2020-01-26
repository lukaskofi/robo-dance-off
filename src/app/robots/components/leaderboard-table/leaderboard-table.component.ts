import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { Robot, RobotsQuery } from '../../state';

@Component({
  selector: 'rbo-leaderboard-table',
  templateUrl: './leaderboard-table.component.html',
  styleUrls: ['./leaderboard-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeaderboardTableComponent {
  constructor(private robotsQuery: RobotsQuery) {}

  @Input()
  public data: { [key: number]: number };

  public robots$ = this.robotsQuery.selectAll();

  public displayedColumns = ['position', 'name', 'powermove'];

}
