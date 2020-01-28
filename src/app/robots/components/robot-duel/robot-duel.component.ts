import * as _ from 'lodash';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { RobotsQuery, DanceOffResult } from '../../state';

interface RobotStyleDescriptor {
  [key: string]: string;
}

@Component({
  selector: 'rbo-robot-duel',
  templateUrl: './robot-duel.component.html',
  styleUrls: ['./robot-duel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RobotDuelComponent {
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
          'animation-duration': `${_.random(400, 1200, false)}ms`,
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

}
