import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TitleService } from '../../services/title.service';

@Component({
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  public ngOnInit(): void {
    this.titleService.setTitle('Not found');
  }

}
