import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {
  DanceOffHomeComponent,
  RobotAvatarStripComponent,
  RobotTeamComponent,
  DanceOffStageComponent
} from './components';
import { CompetitionService } from './services/competition.service';
import { ApiService } from './services/api.service';
import { RobotsService, RobotsQuery, RobotsStore, DanceOffsQuery, DanceOffsStore } from './state';
import { RobotDuelComponent } from './components/robot-duel/robot-duel.component';
import { LeaderboardHomeComponent } from './components/leaderboard-home/leaderboard-home.component';
import { LeaderboardTableComponent } from './components/leaderboard-table/leaderboard-table.component';
import { DanceOffService } from './state/dance-offs.service';

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
