import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { DanceOff } from './dance-offs.model';
import { Injectable } from '@angular/core';

export interface DanceOffsState extends EntityState<DanceOff, number> {}

@Injectable()
@StoreConfig({ name: 'dance-offs' })
export class DanceOffsStore extends EntityStore<DanceOffsState> {
  constructor() {
    super();
  }
}
