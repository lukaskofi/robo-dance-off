import { QueryEntity } from '@datorama/akita';
import { DanceOffsState, DanceOffsStore } from './dance-offs.store';
import { Injectable } from '@angular/core';
import { RobotsModule } from '../robots.module';

@Injectable({
  providedIn: RobotsModule
})
export class DanceOffsQuery extends QueryEntity<DanceOffsState> {
  constructor(protected store: DanceOffsStore) {
    super(store);
  }
}
