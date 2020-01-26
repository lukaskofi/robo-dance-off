import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { DanceOffResult, RobotsQuery } from 'src/app/robots/state';
import { Observable, timer } from 'rxjs';
import * as _ from 'lodash';
import { map, take } from 'rxjs/operators';

interface RobotStyleDescriptor {
  [key: string]: string;
}

@Component({
  selector: 'rbo-robot-duel',
  templateUrl: './robot-duel.component.html',
  styleUrls: ['./robot-duel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RobotDuelComponent implements OnInit {
  // selected animate.css animations
  private static danceMoves = [
    'bounce',
    'rubberBand',
    'shake',
    'swing',
    'tada',
    'wobble',
    'jello',
    'heartBeat',
    'flip'
  ];

  constructor(private robotsQuery: RobotsQuery) {}

  private robotDuel: DanceOffResult;

  public dancingStyles: { [key: number]: RobotStyleDescriptor };

  @Input()
  public set duel(duel: DanceOffResult) {
    this.robotDuel = duel;
    this.dancingStyles = {};
    if (this.robotDuel != null) {
      for (const id of this.robotDuel.opponents) {
        const name = _.sample(RobotDuelComponent.danceMoves);
        this.dancingStyles[id] = {
          'animation-name': name,
          'animation-duration': '700ms',
          'animation-iteration-count': '1',
          'animation-delay': '200ms'
        };
      }
    }
  }

  public get duel(): DanceOffResult {
    return this.robotDuel;
  }

  public getAvatar(id: number): string {
    return this.robotsQuery.getAvatar(id);
  }

  ngOnInit() {}
}
