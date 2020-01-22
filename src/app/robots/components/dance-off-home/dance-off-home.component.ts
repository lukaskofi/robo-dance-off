import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RobotsService } from '../../state/robots.service';
import { RobotsQuery } from '../../state/robots.query';

@Component({
  templateUrl: './dance-off-home.component.html',
  styleUrls: ['./dance-off-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DanceOffHomeComponent implements OnInit {
  constructor(
    private robotsService: RobotsService,
    private robotsQuery: RobotsQuery
  ) {}

  public competitionInProgress = false;

  public robotAvatars$ = this.robotsQuery.avatars$;
  public workingRobots$ = this.robotsQuery.workingRobots$;

  public startCompetition(): void {
    this.competitionInProgress = true;
  }

  public ngOnInit(): void {
    if (!this.robotsQuery.hasEntity()) {
      this.robotsService.populateRobotsStore();
    }
  }
}
