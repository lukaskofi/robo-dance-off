import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { appRoutes } from './constants/routes';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { DanceOffHomeComponent } from './robots/components';

const routes: Routes = [
  {
    path: '',
    redirectTo: `/${appRoutes.home}`,
    pathMatch: 'full'
  },
  { path: appRoutes.home, component: DanceOffHomeComponent },
  { path: appRoutes.leaderboard, component: NotFoundComponent },
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
