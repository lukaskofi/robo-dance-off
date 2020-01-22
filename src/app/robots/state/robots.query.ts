import { RobotsState, RobotsStore } from './robots.store';
import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { RobotsModule } from '../robots.module';

@Injectable()
export class RobotsQuery extends QueryEntity<RobotsState> {
  constructor(protected store: RobotsStore) {
    super(store);
  }
}
