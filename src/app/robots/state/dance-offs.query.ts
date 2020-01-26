import { QueryEntity } from '@datorama/akita';
import { DanceOffsState, DanceOffsStore } from './dance-offs.store';
import { Injectable } from '@angular/core';

@Injectable()
export class DanceOffsQuery extends QueryEntity<DanceOffsState> {
  constructor(protected store: DanceOffsStore) {
    super(store);
  }
}
