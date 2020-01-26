import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class TitleService {

private static suffix = ' | Robot Dance Off';

  constructor(private title: Title) { }

  public setTitle(title: string): void {
    this.title.setTitle(`${title}${TitleService.suffix}`);
  }
}
