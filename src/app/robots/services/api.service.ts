import { Injectable } from '@angular/core';
import { RobotsModule } from '../robots.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Robot } from '../state/robots.model';
import { apiRoutes } from '../../constants/api';
import { DanceOff, DanceOffResults } from '../state/dance-offs.model';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  public getRobots(): Observable<Robot[]> {
    return this.dispatchGet(apiRoutes.robots);
  }

  public getDanceOffs(): Observable<DanceOff[]> {
    return this.dispatchGet(apiRoutes.danceOffs);
  }

  public postDanceOffResults(results: DanceOffResults): Observable<DanceOff[]> {
    return this.dispatchPost(apiRoutes.danceOffs, results);
  }

  /**
   * Base GET, retry twice before giving up
   * @param url Url to get
   */
  private dispatchGet<T>(url: string): Observable<T> {
    return this.http.get<T>(url).pipe(
      retry(2)
    );
  }

  /**
   * Base POST
   * @param url URL to post to
   * @param body POST body
   */
  private dispatchPost<T, M>(url: string, body: M): Observable<T> {
    return this.http.post<T>(url, body);
  }
}
