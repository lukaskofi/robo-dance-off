import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RobotsService } from './state/robots.service';
import { RobotsQuery } from './state/robots.query';
import { ApiService } from './services/api.service';
import { RobotsStore } from './state/robots.store';
import { SharedModule } from '../shared/shared.module';
import { DanceOffHomeComponent } from './components';
import { RobotAvatarStripComponent } from './components/robot-avatar-strip/robot-avatar-strip.component';
import { RobotTeamComponent } from './components/robot-team/robot-team.component';
import { DanceOffStageComponent } from './components/dance-off-stage/dance-off-stage.component';
import { CompetitionService } from './services/competition.service';



@NgModule({
  declarations: [DanceOffHomeComponent, RobotAvatarStripComponent, RobotTeamComponent, DanceOffStageComponent],
  providers: [ApiService, RobotsService, RobotsQuery, RobotsStore, CompetitionService],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class RobotsModule { }
