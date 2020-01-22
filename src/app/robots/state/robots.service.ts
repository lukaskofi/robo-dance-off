import { Injectable } from '@angular/core';
import { RobotsModule } from '../robots.module';
import { ApiService } from '../services/api.service';
import { RobotsStore } from './robots.store';
import { tap, take } from 'rxjs/operators';

@Injectable()
export class RobotsService {
  // Injecting the query as well, to check if the robots have already been loaded
  constructor(
    private apiService: ApiService,
    private robotsStore: RobotsStore
  ) {}

  public populateRobotsStore(): void {
    this.apiService
      .getRobots()
      .pipe(
        take(1),
        tap(robots => {
          this.robotsStore.upsertMany(robots);
        })
      )
      .subscribe(robots => {
        console.log(`${robots.length} robots have been added to the store.`);
      });
  }
}
