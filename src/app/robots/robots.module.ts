import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanceOffHomeComponent } from './components/dance-off-home/dance-off-home.component';
import { RobotsService } from './state/robots.service';
import { RobotsQuery } from './state/robots.query';
import { ApiService } from './services/api.service';
import { RobotsStore } from './state/robots.store';



@NgModule({
  declarations: [DanceOffHomeComponent],
  providers: [ApiService, RobotsService, RobotsQuery, RobotsStore],
  imports: [
    CommonModule
  ]
})
export class RobotsModule { }
