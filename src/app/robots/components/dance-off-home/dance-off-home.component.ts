import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RobotsService } from '../../state/robots.service';

@Component({
  templateUrl: './dance-off-home.component.html',
  styleUrls: ['./dance-off-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DanceOffHomeComponent implements OnInit {

  constructor(private robotsService: RobotsService) { }

  public ngOnInit(): void {
    this.robotsService.populateRobotsStore();
  }

}
