import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DanceOffsStore } from './dance-offs.store';
import { DanceOffResults, DanceOff } from './dance-offs.model';
import { take } from 'rxjs/operators';

@Injectable()
export class DanceOffService {
  constructor(
    private apiService: ApiService,
    private danceOffStore: DanceOffsStore
  ) {}

  /**
   * No waiting for the results to be posted, we just display a message if it fails.
   */
  public postResults(results: DanceOffResults): void {
    this.apiService.postDanceOffResults(results).subscribe({
      next: danceOffs => {
        this.danceOffStore.upsertMany(danceOffs);
      },
      error: err => {
        console.error(err);
      }
    });
  }

  public loadResults(): void {
    this.apiService.getDanceOffs().pipe(take(1)).subscribe(this.saveToStore);
  }

  private saveToStore(danceOffs: DanceOff[]): void {
    this.danceOffStore.upsertMany(danceOffs);
  }
}
