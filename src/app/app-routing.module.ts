import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { appRoutes } from './constants/routes';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { DanceOffHomeComponent } from './robots/components';
import { LeaderboardHomeComponent } from './robots/components/leaderboard-home/leaderboard-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: `/${appRoutes.home}`,
    pathMatch: 'full'
  },
  { path: appRoutes.home, component: DanceOffHomeComponent },
  { path: appRoutes.leaderboard, component: LeaderboardHomeComponent },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
