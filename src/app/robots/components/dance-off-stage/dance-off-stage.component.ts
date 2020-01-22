import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Robot } from '../../state/robots.model';

@Component({
  selector: 'rbo-dance-off-stage',
  templateUrl: './dance-off-stage.component.html',
  styleUrls: ['./dance-off-stage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DanceOffStageComponent implements OnInit {

  constructor() { }


  @Input()
  public robots: Robot[];

  ngOnInit() {
  }

}
