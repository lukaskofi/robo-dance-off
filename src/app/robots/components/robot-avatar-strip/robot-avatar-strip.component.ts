import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'rbo-robot-avatar-strip',
  templateUrl: './robot-avatar-strip.component.html',
  styleUrls: ['./robot-avatar-strip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RobotAvatarStripComponent implements OnInit {
  private static maxDelay = 2;

  constructor() {}

  @Input()
  public avatars: string[];

  public getAnimationDelay(index: number): number {
    const delay = -((index / 10) % RobotAvatarStripComponent.maxDelay);

    return delay;
  }

  ngOnInit() {}
}
