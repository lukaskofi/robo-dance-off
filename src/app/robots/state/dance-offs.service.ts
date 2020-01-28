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
   * Return a promise for simpler handling
   */
  public postResults(results: DanceOffResults): Promise<void> {
    return new Promise((resolve, reject) => {
      this.apiService.postDanceOffResults(results).subscribe({
        next: danceOffs => {
          this.saveToStore(danceOffs);
        },
        error: err => {
          console.error(err);
          reject(err);
        },
        complete: () => {
          resolve();
        }
      });
    });
  }

  /**
   * Return a promise for simpler handling
   */
  public loadResults(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.apiService
        .getDanceOffs()
        .pipe(take(1))
        .subscribe({
          next: danceOffs => {
            this.saveToStore(danceOffs);
          },
          error: err => {
            console.error(err);
            reject(err);
          },
          complete: () => {
            resolve();
          }
        });
    });
  }

  /**
   * Upsert the data into the store
   * @param danceOffs Data
   */
  private saveToStore(danceOffs: DanceOff[]): void {
    this.danceOffStore.upsertMany(danceOffs);
  }
}
