import { NgModule } from '@angular/core';
import {
  DanceOffHomeComponent,
  RobotAvatarStripComponent,
  RobotTeamComponent,
  DanceOffStageComponent,
  RobotDuelComponent,
  LeaderboardHomeComponent,
  LeaderboardTableComponent
} from './components';
import { ApiService, CompetitionService } from './services';
import {
  RobotsService,
  RobotsQuery,
  RobotsStore,
  DanceOffService,
  DanceOffsQuery,
  DanceOffsStore
} from './state';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DanceOffHomeComponent,
    RobotAvatarStripComponent,
    RobotTeamComponent,
    DanceOffStageComponent,
    RobotDuelComponent,
    LeaderboardHomeComponent,
    LeaderboardTableComponent
  ],
  providers: [
    ApiService,
    RobotsService,
    RobotsQuery,
    RobotsStore,
    DanceOffService,
    DanceOffsQuery,
    DanceOffsStore,
    CompetitionService
  ],
  imports: [CommonModule, SharedModule]
})
export class RobotsModule {}
