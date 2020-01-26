import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RobotsService } from '../../state/robots.service';
import { RobotsQuery } from '../../state/robots.query';
import { TitleService } from 'src/app/shared/services/title.service';

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
