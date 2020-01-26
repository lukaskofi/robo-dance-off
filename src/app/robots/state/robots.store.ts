import { Robot } from './robots.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface RobotsState extends EntityState<Robot, number> {}

@Injectable()
@StoreConfig({ name: 'robots' })
export class RobotsStore extends EntityStore<RobotsState> {
  constructor() {
    super();
  }
}
