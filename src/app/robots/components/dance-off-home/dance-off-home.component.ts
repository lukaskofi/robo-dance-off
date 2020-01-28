import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { RobotsService, RobotsQuery } from '../../state';
import { TitleService } from 'src/app/shared/services';


@Component({
  templateUrl: './dance-off-home.component.html',
  styleUrls: ['./dance-off-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DanceOffHomeComponent implements OnInit {
  constructor(
    private robotsService: RobotsService,
    private robotsQuery: RobotsQuery,
    private titleService: TitleService
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
    this.titleService.setTitle('Welcome');
  }
}
