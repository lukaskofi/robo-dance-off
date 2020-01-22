import { RobotsState, RobotsStore } from './robots.store';
import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { teamCriteria } from 'src/app/constants/competition';

@Injectable()
export class RobotsQuery extends QueryEntity<RobotsState> {
  constructor(protected store: RobotsStore) {
    super(store);
  }

  public avatars$ = this.selectAll().pipe(
    map(robots => {
      return robots.map(robot => robot.avatar);
    })
  );

  public workingRobots$ = this.selectAll({
    filterBy: robot => teamCriteria.allowOutOfOrder || !robot.outOfOrder
  });
}
