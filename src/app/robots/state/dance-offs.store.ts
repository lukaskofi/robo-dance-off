import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { DanceOff } from './dance-offs.model';

export interface DanceOffsState extends EntityState<DanceOff, number> {}

@StoreConfig({ name: 'dance-offs' })
export class DanceOffsStore extends EntityStore<DanceOffsState> {
  constructor() {
    super();
  }
}
